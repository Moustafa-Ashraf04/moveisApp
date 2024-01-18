import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movie-home-card',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './movie-home-card.component.html',
  styleUrl: './movie-home-card.component.css',
})
export class MovieHomeCardComponent {
  @Input() movie: any;

  @Output() sendToParent = new EventEmitter<string>();

  constructor(private router: Router) {}

  fillColor: string = '#000000';

  changeFillColor(): void {
    this.fillColor = this.fillColor === '#000000' ? '#ffe353' : '#000000';
  }

  prevent(event: Event): void {
    event.preventDefault();
  }
}
