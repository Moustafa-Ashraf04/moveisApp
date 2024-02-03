import { ApiResponseService } from './../services/api-response.service';
import { Movie } from './../interface/movies';
import { MovieApiResponse } from './../interface/movies';
import { Component, Input, OnInit } from '@angular/core';
import { MovieHomeCardComponent } from '../movie-home-card/movie-home-card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-movies-home-list',
  standalone: true,
  imports: [
    CommonModule,
    MovieHomeCardComponent,
    HttpClientModule,
    RouterModule,
    NgbPaginationModule,
    ButtonModule,
    PaginatorModule,
  ],
  providers: [ApiResponseService],
  templateUrl: './movies-home-list.component.html',
  styleUrl: './movies-home-list.component.css',
})
export class MoviesHomeListComponent implements OnInit {
  constructor(private apiResponse: ApiResponseService) {}

  moviesList: Movie[] = [];

  ngOnInit() {
    this.apiResponse
      .getMoviesList(this.page)
      .subscribe((res: MovieApiResponse) => {
        this.moviesList = res.results;
      });
  }

  page: number = 1;
  first: number = 0;
  rows: number = 20;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.page = event.page + 1;
    this.apiResponse
      .getMoviesList(this.page)
      .subscribe((res: MovieApiResponse) => {
        console.log(res);
        this.moviesList = res.results;
      });
  }
}
