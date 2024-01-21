import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from '../interface/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiResponseService {
  constructor(private http: HttpClient) {}
  private apiKey = 'cb7ebebc41df2761940edae9ddc89d88';
  movie: Movie | any;

  // first try still works
  // getMoviesList() {
  //   const apiKey = 'cb7ebebc41df2761940edae9ddc89d88';
  //   // const apiUrl = `https://api.themoviedb.org/3/movie/popular?page=${pageNum}&api_key=${apiKey}`;
  //   const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`;
  //   return this.http.get(apiUrl);
  // }
  //
  //  #####################################
  // to try on it the pagination
  getMoviesList(pageNum: number): Observable<Movie> {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=${pageNum}`;
    return this.http.get<Movie>(apiUrl);
  }

  getMovieDetails(movieId: number): Observable<Movie> {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<Movie>(apiUrl);
  }

  getMovieRecommends(movieId: number): Observable<any> {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${this.apiKey}`;
    return this.http.get<any>(apiUrl);
  }
}
