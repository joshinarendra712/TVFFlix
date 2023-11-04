import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  public allMoviList:any [] = []
  
  constructor(private movieService:MovieService){}

  ngOnInit(): void {
    this.movieService.getAllMovieList().subscribe({
      next:((res:any) =>{
        this.allMoviList = res.genres;
        // for (const {id , name} of res) {
          
        // }
      }),
      error :( error =>{
        console.log(error);
        
      })
    })
  }

}
