import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public popularMovieArr: any[] = [];
  public backdrop_path: string = '';
  public title = '';
  public release_date = '';
  public genre_ids = '';
  public overview = '';
  public poster_path = '';
  public vote_average = '';
  public id = '';
  public imageBaseURL = 'https://image.tmdb.org/t/p/';
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getAllPopularMovieData();
  }

  public getAllPopularMovieData() {
    this.movieService.getAllPopularMovie().subscribe({
      next: (res: any) => {
        this.popularMovieArr = res.results;
        for (const movie of this.popularMovieArr) {
          const {
            backdrop_path,
            title,
            release_date,
            genre_ids,
            overview,
            poster_path,
            vote_average,
            id,
          } = movie;
          this.backdrop_path = backdrop_path;
          this.title = title;
          this.release_date = release_date;
          this.genre_ids = genre_ids;
          this.overview = overview;
          this.poster_path = poster_path;
          this.vote_average = vote_average;
          this.id = id;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
