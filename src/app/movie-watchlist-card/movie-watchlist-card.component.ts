import { Component, Input } from '@angular/core';
import { Movie } from '../interface/movies';
import { LimitOverviewPipe } from '../limit-overview.pipe';
import { FavoriteColorService } from '../services/favorite-color.service';
import { FavoriteServiceService } from '../services/favorite-service.service';

@Component({
  selector: 'app-movie-watchlist-card',
  standalone: true,
  imports: [LimitOverviewPipe],
  templateUrl: './movie-watchlist-card.component.html',
  styleUrl: './movie-watchlist-card.component.css'
})
export class MovieWatchlistCardComponent {
  @Input() watchii!: Movie;

  constructor(private watchlistService : FavoriteServiceService, private color : FavoriteColorService) {}
  private movieWatchList! : Movie[];

  ngOnInit(){
    this.watchlistService.getFavorite().subscribe(val => this.movieWatchList=val);
  }

  fillColor: string = '#000000';

  changeFillColor(): void {
    this.fillColor = this.fillColor === '#000000' ? '#ffe353' : '#000000';
  }

  preventHeartClick(event: Event): void {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
    console.log(this.watchii);
    if (!this.movieWatchList.some(m => m.id === this.watchii.id)) {
      this.movieWatchList.push(this.watchii);
      this.color.setFillColor("#ffe353");
    } else {
      this.movieWatchList = this.movieWatchList.filter(m => m.id !== this.watchii.id);
      this.color.setFillColor("#000");
    }

    this.watchlistService.setFavorite(this.movieWatchList);
  }
}
