import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteColorService {
  fillColor!: string;

  private favoriteColor = new BehaviorSubject<string>(this.fillColor);

  constructor() {}

  getFillColor() {
    return this.favoriteColor.asObservable();
  }

  setFillColor(newColor: string) {
    this.favoriteColor.next(newColor);
  }
}
