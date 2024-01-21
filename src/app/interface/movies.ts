export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: Number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: Number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  voteaverage: Number;
  vote_count: Number;
}
export interface MovieApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface DetailsApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: production_companies;
  production_countries: production_countries;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: spoken_languages;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}
interface production_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface production_countries {
  iso_3166_1: string;
  name: string;
}
interface spoken_languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
