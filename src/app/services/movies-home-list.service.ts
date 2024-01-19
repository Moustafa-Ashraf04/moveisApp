import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from '../interface/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesHomeListService {
  movie: Movie | any;
  constructor(private http: HttpClient) {}

  getMoviesList() {
    const apiKey = 'cb7ebebc41df2761940edae9ddc89d88';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    return this.http.get(apiUrl);
  }
}
