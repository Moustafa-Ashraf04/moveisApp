import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmptyWatchlistComponent } from '../empty-watchlist/empty-watchlist.component';
import { Movie } from '../interface/movies';
import { FavoriteServiceService } from '../services/favorite-service.service';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, EmptyWatchlistComponent],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css',
})
export class WatchlistComponent {
  watchlistMovies: Movie[] = [];

  constructor(private watchlistService : FavoriteServiceService){}

  ngOnInit(){
    // this.watchlistService.getFavorite().subscribe(val => console.log(this.watchlistMovies.push(val)))
    this.watchlistService.getFavorite().subscribe(val => console.log(this.watchlistMovies=val, val, this.watchlistMovies.length))
  }


  fillColor: string = '#000000';

  changeFillColor(): void {
    this.fillColor = this.fillColor === '#000000' ? '#ffe353' : '#000000';
  }
  
  preventHeartClick(event: Event): void {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
  }
}
