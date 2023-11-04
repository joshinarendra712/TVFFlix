import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public baseUrl = 'https://api.themoviedb.org/3/';
  public api_key = '89ae51ab597dad4913e22c5b2567dbe2';
  public imageBaseURL = 'https://image.tmdb.org/t/p/';

  constructor( private http:HttpClient) { }

  public getAllMovieList():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}genre/movie/list?api_key=${this.api_key}`);
  }

  public getAllPopularMovie(){
    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.api_key}&page=1`);
  }
}
