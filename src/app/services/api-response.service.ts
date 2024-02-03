import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DetailsApiResponse,
  Movie,
  MovieApiResponse,
} from '../interface/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiResponseService {
  constructor(private http: HttpClient) {}
  private apiKey = 'cb7ebebc41df2761940edae9ddc89d88';
  movie: Movie | any;
  getMoviesList(pageNum: number): Observable<MovieApiResponse> {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=${pageNum}`;
    return this.http.get<MovieApiResponse>(apiUrl);
  }

  getMovieDetails(movieId: number): Observable<DetailsApiResponse> {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<DetailsApiResponse>(apiUrl);
  }

  getMovieRecommends(movieId: number): Observable<MovieApiResponse> {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${this.apiKey}`;
    return this.http.get<MovieApiResponse>(apiUrl);
  }

  // declared for later implementation
  getSearchResults() {}
}
