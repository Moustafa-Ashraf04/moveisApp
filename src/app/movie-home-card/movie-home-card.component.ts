import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from '@angular/router';
// import { RatingproggressbarComponent } from "../ratingproggressbar/ratingproggressbar.component";
import { PercentScalePipe } from '../pipes/percent-scale.pipe';

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
  @Input() movie: any;

  @Output() sendToParent = new EventEmitter<string>();

  constructor(private router: Router) {}

  // default color for the heart icon
  fillColor: string = '#000000';
  // changing color on click
  changeFillColor(): void {
    this.fillColor = this.fillColor === '#000000' ? '#ffe353' : '#000000';
  }

  preventHeartClick(event: Event): void {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
  }
}
