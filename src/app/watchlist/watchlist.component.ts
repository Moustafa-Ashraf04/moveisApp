import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmptyWatchlistComponent } from '../empty-watchlist/empty-watchlist.component';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, EmptyWatchlistComponent],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css',
})
export class WatchlistComponent {
  watchlistMovies: any[] = [];
}
