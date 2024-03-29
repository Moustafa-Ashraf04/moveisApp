import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieHomeCardComponent } from '../movie-home-card/movie-home-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiResponseService } from '../services/api-response.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Movie, MovieDetails } from './../interface/movies';
import { PercentScalePipe } from '../pipes/percent-scale.pipe';
import { RemoveDotPipe } from '../pipes/remove-dot.pipe';
import { FavoriteServiceService } from '../services/favorite-service.service';
import { FavoriteColorService } from '../services/favorite-color.service';

@Component({
  selector: 'app-moviedetails',
  standalone: true,
  providers: [ApiResponseService],
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css',
  imports: [
    HttpClientModule,
    CommonModule,
    PercentScalePipe,
    RemoveDotPipe,
    MovieHomeCardComponent,
    RouterModule,
  ],
})
export class MoviedetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiResponse: ApiResponseService,
    private router: Router,
    private watchlistService: FavoriteServiceService,
    private color: FavoriteColorService
  ) {}

  details: any;
  id!: number;
  recommendations: Movie[] = [];

  private movieWatchList!: Movie[];

  ngOnInit(): void {
    // Extract movie ID from the URL
    this.route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
      this.apiResponse.getMovieDetails(this.id).subscribe((details) => {
        // Handle the details API response here
        this.details = details;
      });
      this.apiResponse.getMovieRecommends(this.id).subscribe((recommends) => {
        // Handle the recommendations API response here
        this.recommendations = recommends.results;
      });
    });

    this.watchlistService
      .getFavorite()
      .subscribe((val) => (this.movieWatchList = val));
  }

  // to change color of the heart icon once added to the watch list and change it back when clicked again
  // getFilledStarsCount(vote_average: number): number {
  // Calculate the number of filled stars based on the rating
  //   return Math.round((vote_average / 100) * 5);
  // }

  // heart icon color black
  fillColor: string = '#000000';
  //change its color on click
  changeFillColor(): void {
    this.fillColor = this.fillColor === '#000000' ? '#ffe353' : '#000000';
  }

  preventHeartClick(event: Event): void {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
    console.log(this.details);
    if (!this.movieWatchList.some((m) => m.id === this.details.id)) {
      this.movieWatchList.push(this.details);
      this.color.setFillColor('#ffe353');
    } else {
      this.movieWatchList = this.movieWatchList.filter(
        (m) => m.id !== this.details.id
      );
      this.color.setFillColor('#000');
    }

    this.watchlistService.setFavorite(this.movieWatchList);
  }
}
