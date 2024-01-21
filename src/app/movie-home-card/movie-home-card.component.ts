import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FavoriteServiceService } from '../services/favorite-service.service';
import { Movie } from '../interface/movies';
import { FavoriteColorService } from '../services/favorite-color.service';

@Component({
  selector: 'app-movie-home-card',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, RouterLinkActive],
  templateUrl: './movie-home-card.component.html',
  styleUrl: './movie-home-card.component.css',
})
export class MovieHomeCardComponent {
  @Input() movie!: Movie;

  @Output() sendToParent = new EventEmitter<string>();

  constructor(private router: Router, private watchlistService : FavoriteServiceService, private color : FavoriteColorService) {}
  private movieWatchList! : Movie[];

  ngOnInit(){
    this.watchlistService.getFavorite().subscribe(val => this.movieWatchList=val);
  }

  

  // to change color of the heart icon once added to the watch list and change it back when clicked again
  fillColor!: string;

  changeFillColor(){
    this.color.getFillColor().subscribe(val => this.fillColor=val)
  }

  preventHeartClick(event: Event): void {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
    console.log(this.movie);
    if (!this.movieWatchList.some(m => m.id === this.movie.id)) {
      this.movieWatchList.push(this.movie);
      this.color.setFillColor("#ffe353");
    } else {
      this.movieWatchList = this.movieWatchList.filter(m => m.id !== this.movie.id);
      this.color.setFillColor("#000");
    }

    this.watchlistService.setFavorite(this.movieWatchList);
    
    
    // this.movieWatchList = this.movieWatchList.map(m => ({...m, is_favorite:true}));
    // console.log(this.movieWatchList);
    // this.movieWatchList.map(m => console.log(m.is_favorite));
    // console.log(this.movieWatchList[0].is_favorite);
  }

  // console.log(movieWatchList[0].is_favorite);
}
