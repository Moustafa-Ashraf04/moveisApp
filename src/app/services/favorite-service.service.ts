import { Injectable } from '@angular/core';
import { Movie } from '../interface/movies';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {
  private movie: Movie[] = [];

  private favorite = new BehaviorSubject<Movie[]>(this.movie);

  constructor() { }

  getFavorite(){
    return this.favorite.asObservable();
  }

  setFavorite(newMovie : Movie[]){
    this.favorite.next(newMovie);
  }
}
