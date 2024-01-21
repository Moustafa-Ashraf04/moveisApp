import { Component } from '@angular/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FavoriteServiceService } from '../services/favorite-service.service';
import { FavoriteColorService } from '../services/favorite-color.service';
import { Movie } from '../interface/movies';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private watchlistService : FavoriteServiceService, private color : FavoriteColorService){}

  movieWatchList! : Movie[];
  ngOnInit(){
    this.watchlistService.getFavorite().subscribe(val => this.movieWatchList=val);
  }
}
