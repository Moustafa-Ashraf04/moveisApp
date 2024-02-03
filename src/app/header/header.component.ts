import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FavoriteServiceService } from '../services/favorite-service.service';
import { FavoriteColorService } from '../services/favorite-color.service';
import { Movie } from '../interface/movies';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, DropdownModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    private watchlistService: FavoriteServiceService,
    private color: FavoriteColorService
  ) {}

  movieWatchList!: Movie[];
  ngOnInit() {
    this.watchlistService
      .getFavorite()
      .subscribe((val) => (this.movieWatchList = val));
  }
}
