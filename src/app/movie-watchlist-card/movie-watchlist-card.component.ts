import { Component, Input } from '@angular/core';
import { Movie } from '../interface/movies';

@Component({
  selector: 'app-movie-watchlist-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-watchlist-card.component.html',
  styleUrl: './movie-watchlist-card.component.css'
})
export class MovieWatchlistCardComponent {
  @Input() watchii!: Movie;

  fillColor: string = '#000000';

  changeFillColor(): void {
    this.fillColor = this.fillColor === '#000000' ? '#ffe353' : '#000000';
  }

  preventHeartClick(event: Event): void {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
  }
}
