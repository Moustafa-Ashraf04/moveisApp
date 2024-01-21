import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsService } from '../services/movie-details.service';
import { CommonModule } from '@angular/common';
import { FavoriteColorService } from '../services/favorite-color.service';
import { FavoriteServiceService } from '../services/favorite-service.service';
import { Movie } from '../interface/movies';

@Component({
  selector: 'app-moviedetails',
  standalone: true,
  imports: [NgbRatingModule, HttpClientModule, CommonModule],
  providers: [MovieDetailsService],
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css',
  styles: `
			i {
				position: relative;
				display: inline-block;
				font-size: 2.5rem;
				padding-right: 0.1rem;
				color: #d3d3d3;
			}

			.filled {
				color: red;
				overflow: hidden;
				position: absolute;
				top: 0;
				left: 0;
			}
		`,
})
export class MoviedetailsComponent implements OnInit {
  movieId: string | null = null;
  // movieId: string;

  constructor(
    private route: ActivatedRoute,
    private detailsService: MovieDetailsService,
    private watchlistService : FavoriteServiceService, private color : FavoriteColorService
  ) {}
  details: any;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const movieId = params.get('id');
      if (movieId) {
        const numericMovieId = +movieId; // Convert to number
        this.detailsService.getMovieDetails(numericMovieId).subscribe(
          (data) => {
            this.details = data;
            // Additional logic to handle the fetched details
          },
          (error) => {
            console.error('Error fetching movie details:', error);
            // Handle error scenarios
          }
        );
      }
    });

    this.watchlistService.getFavorite().subscribe(val => this.movieWatchList=val);
  }

  rating = 5;

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }

  private movieWatchList! : Movie[];
  // to change color of the heart icon once added to the watch list and change it back when clicked again
  fillColor: string = '#000000';

  changeFillColor(): void {
    this.fillColor = this.fillColor === '#000000' ? '#ffe353' : '#000000';
  }

  preventHeartClick(event: Event): void {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
    console.log(this.details);
    if (!this.movieWatchList.some(m => m.id === this.details.id)) {
      this.movieWatchList.push(this.details);
      this.color.setFillColor("#ffe353");
    } else {
      this.movieWatchList = this.movieWatchList.filter(m => m.id !== this.details.id);
      this.color.setFillColor("#000");
    }

    this.watchlistService.setFavorite(this.movieWatchList);
  }
}
