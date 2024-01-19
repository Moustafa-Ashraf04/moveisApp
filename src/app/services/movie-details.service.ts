import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Movie } from '../interface/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailsService {
  constructor(private http: HttpClient) {}

  getMovieDetails(movieId: number): Observable<Movie> {
    const apiKey = 'cb7ebebc41df2761940edae9ddc89d88';
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    return this.http.get<Movie>(apiUrl);
  }
}
