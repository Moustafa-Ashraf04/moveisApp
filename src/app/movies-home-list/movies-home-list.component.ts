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

  // ###############  Previous tries ignore them ##########
  // ngOnInit() {
  //   this.moviesService.getMoviesList().subscribe(
  //     (res: any) => {
  //       this.moviesList = res.results; // Assuming the response has a 'results' property
  //       // console.log(res.results[8].original_title);
  //       console.log(res.results);
  //       // showMovies(res.results);
  //     },
  //     (error) => {
  //       console.error('Error fetching movies:', error);
  //     }
  //   );
  // }

  // function showMovies(data) {
  //   data.array.forEach(movie => {
  //     const movieEl = document.createElement("div")
  //     movieEl.classList.add('movie')
  //     movieEl.innerHTML = `

  //     `
  //   });
  // }
  // ngOnInit() {
  //   this.moviesService
  //     .getMoviesList()
  //     .subscribe((res: any) => (this.moviesList = res.results));
  //   console.log(this.movie);
  // }
}
