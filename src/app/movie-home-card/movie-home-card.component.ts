import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FavoriteServiceService } from '../services/favorite-service.service';
import { Movie } from '../interface/movies';

@Component({
  selector: 'app-movie-home-card',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, RouterLinkActive],
  templateUrl: './movie-home-card.component.html',
  styleUrl: './movie-home-card.component.css',
})
export class MovieHomeCardComponent {
  @Input() movie: any;

  @Output() sendToParent = new EventEmitter<string>();

  constructor(private router: Router, private watchlistService : FavoriteServiceService) {}
  private movieWatchList! : Movie[];

  ngOnInit(){
    this.watchlistService.getFavorite().subscribe(val => this.movieWatchList=val)
  }

  

  // to change color of the heart icon once added to the watch list and change it back when clicked again
  fillColor: string = '#000000';

  changeFillColor(): void {
    this.fillColor = this.fillColor === '#000000' ? '#ffe353' : '#000000';
  }

  preventHeartClick(event: Event): void {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
    console.log(this.movie);
    this.movieWatchList.push(this.movie);
    console.log("movieWatchList : "+ this.movieWatchList)
    this.watchlistService.setFavorite(this.movieWatchList)
  }
}
