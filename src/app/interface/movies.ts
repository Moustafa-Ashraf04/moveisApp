export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: Number;
  original_language: string;
  overview: string;
  popularity: Number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: Number;
  vote_count: Number;
  is_favorite? : Boolean;
}