import { Movie } from './../interface/movies';
import { Component, Input, OnInit } from '@angular/core';
import { MovieHomeCardComponent } from '../movie-home-card/movie-home-card.component';
import { CommonModule } from '@angular/common';
import { MoviesHomeListService } from '../services/movies-home-list.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-movies-home-list',
  standalone: true,
  imports: [
    CommonModule,
    MovieHomeCardComponent,
    HttpClientModule,
    RouterModule,
  ],
  providers: [MoviesHomeListService],
  templateUrl: './movies-home-list.component.html',
  styleUrl: './movies-home-list.component.css',
})
export class MoviesHomeListComponent implements OnInit {
  moviesList: any;
  // moviesList!: Movie[];

  movie: any;

  constructor(private moviesService: MoviesHomeListService) {}

  ngOnInit() {
    this.moviesService.getMoviesList().subscribe((res: any) => {
      console.log(res);
      this.moviesList = res.results;
    });
  }
}
