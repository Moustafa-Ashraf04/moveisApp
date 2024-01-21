import { ApiResponseService } from './../services/api-response.service';
import { Movie } from './../interface/movies';
import { MovieApiResponse } from './../interface/movies';
import { Component, Input, OnInit } from '@angular/core';
import { MovieHomeCardComponent } from '../movie-home-card/movie-home-card.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movies-home-list',
  standalone: true,
  imports: [
    CommonModule,
    MovieHomeCardComponent,
    HttpClientModule,
    RouterModule,
    NgbPaginationModule,
  ],
  providers: [ApiResponseService],
  templateUrl: './movies-home-list.component.html',
  styleUrl: './movies-home-list.component.css',
})
export class MoviesHomeListComponent implements OnInit {
  constructor(private apiResponse: ApiResponseService) {}

  moviesList: Movie[] = [];

  ngOnInit() {
    this.apiResponse.getMoviesList(this.page).subscribe((res: any) => {
      console.log(res);
      this.moviesList = res.results;
      console.log(res.results);
    });
  }


  // initial value for the pagination bar
  page: number = 1;

  changepage(newPage: number) {
    this.apiResponse.getMoviesList(newPage).subscribe((res: any) => {
      console.log(res);
      this.moviesList = res.results;
      console.log(res.results);
    });
  }
}
