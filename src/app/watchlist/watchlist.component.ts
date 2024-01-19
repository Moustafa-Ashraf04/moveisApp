import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.css',
})
export class WatchlistComponent {
  watchlistMovies: any[] = [];
}
