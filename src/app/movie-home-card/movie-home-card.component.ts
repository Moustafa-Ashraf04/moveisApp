import { Movie } from './../interface/movies';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PercentScalePipe } from '../pipes/percent-scale.pipe';
import { FavoriteServiceService } from '../services/favorite-service.service';
import { FavoriteColorService } from '../services/favorite-color.service';

@Component({
  selector: 'app-movie-home-card',
  standalone: true,
  templateUrl: './movie-home-card.component.html',
  styleUrl: './movie-home-card.component.css',
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    DatePipe,
    PercentScalePipe,
  ],
})
export class MovieHomeCardComponent {
  @Input() movie!: Movie;

  @Output() sendToParent = new EventEmitter<string>();

  constructor(
    private router: Router,
    private watchlistService: FavoriteServiceService,
    private color: FavoriteColorService
  ) {}
  ngOnInit() {
    this.watchlistService
      .getFavorite()
      .subscribe((val) => (this.movieWatchList = val));
  }
  private movieWatchList!: Movie[];

  // default color for the heart icon
  fillColor: string = '#000000';
  // changing color on click
  changeFillColor(): void {
    this.fillColor = this.fillColor === '#000000' ? '#ffe353' : '#000000';
    // this.color.getFillColor().subscribe(val => this.fillColor=val)
  }

  preventHeartClick(event: Event): void {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
    console.log(this.movie);
    if (!this.movieWatchList.some((m) => m.id === this.movie.id)) {
      this.movieWatchList.push(this.movie);
      this.color.setFillColor('#ffe353');
    } else {
      this.movieWatchList = this.movieWatchList.filter(
        (m) => m.id !== this.movie.id
      );
      this.color.setFillColor('#000');
    }

    this.watchlistService.setFavorite(this.movieWatchList);
  }
}
