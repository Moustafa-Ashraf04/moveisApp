import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmptyWatchlistComponent } from '../empty-watchlist/empty-watchlist.component';
import { Movie } from '../interface/movies';
import { FavoriteServiceService } from '../services/favorite-service.service';
import { MovieWatchlistCardComponent } from '../movie-watchlist-card/movie-watchlist-card.component';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, EmptyWatchlistComponent, MovieWatchlistCardComponent],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css',
})
export class WatchlistComponent {
  watchlistMovies: Movie[] = [];

  constructor(private watchlistService : FavoriteServiceService){}

  ngOnInit(){
    // this.watchlistService.getFavorite().subscribe(val => console.log(this.watchlistMovies.push(val)))
    this.watchlistService.getFavorite().subscribe(val => console.log(this.watchlistMovies=val, val, this.watchlistMovies.length))
    console.log(typeof(this.watchlistMovies[0]));
  }


  
}
