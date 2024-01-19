import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive } from '@angular/router';

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

  constructor(private router: Router) {}

  // to change color of the heart icon once added to the watch list and change it back when clicked again
  fillColor: string = '#000000';

  changeFillColor(): void {
    this.fillColor = this.fillColor === '#000000' ? '#ffe353' : '#000000';
  }

  preventHeartClick(event: Event): void {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
  }
}
