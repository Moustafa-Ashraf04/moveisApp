import { Injectable } from '@angular/core';
import { Movie } from '../interface/movies';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {
  private movie: Movie[] = [
    {
      adult: false,
      backdrop_path: "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
      genre_ids: [],
      id: 955916,
      original_language: "en",
      // original_title: "Lift",
      overview: "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
      popularity: 1951.937,
      poster_path: "/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg",
      release_date: "2024-01-10",
      title: "Lift",
      video:false,
      voteaverage: 6.252,
      vote_count:318
    },
    {
      adult: false,
      backdrop_path: "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
      genre_ids: [],
      id: 955916,
      original_language: "en",
      // original_title: "Lift",
      overview: "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
      popularity: 1951.937,
      poster_path: "/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg",
      release_date: "2024-01-10",
      title: "Lift",
      video:false,
      voteaverage: 6.252,
      vote_count:318
    },
    {
      adult: false,
      backdrop_path: "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
      genre_ids: [],
      id: 955916,
      original_language: "en",
      // original_title: "Lift",
      overview: "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
      popularity: 1951.937,
      poster_path: "/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg",
      release_date: "2024-01-10",
      title: "Lift",
      video:false,
      voteaverage: 6.252,
      vote_count:318
    }
  ];

  private favorite = new BehaviorSubject<Movie[]>(this.movie);

  constructor() { }

  getFavorite(){
    return this.favorite.asObservable();
  }

  setFavorite(newMovie : Movie[]){
    this.favorite.next(newMovie);
  }
}
