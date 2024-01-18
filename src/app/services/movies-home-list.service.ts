import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesHomeListService {
  constructor(private http: HttpClient) {}

  // getMoviesList() {
  // return this.http.get(
  //   'https://api.themoviedb.org/3/movie/popular?api_key=cb7ebebc41df2761940edae9ddc89d88'
  // );
  getMoviesList() {
    const apiKey = 'cb7ebebc41df2761940edae9ddc89d88';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    return this.http.get(apiUrl);
  }
}
