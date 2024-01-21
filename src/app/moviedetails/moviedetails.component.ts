import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieHomeCardComponent } from '../movie-home-card/movie-home-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiResponseService } from '../services/api-response.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { routes } from './../app.routes';
import { Movie, MovieDetails } from './../interface/movies';
import { PercentScalePipe } from '../pipes/percent-scale.pipe';
import { RemoveDotPipe } from '../pipes/remove-dot.pipe';

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
    private router: Router
  ) {}

  // ########
  // not used
  // id: any;
  // movieId: string | null = null;
  // $svg: any;
  // times: any;
  // res: any;
  // moviesList: any;
  // recommends: any;
  // movieId: string;
  // Movie: any;
  // details: MovieDetails[] = [];
  // ########

  details: any;
  recommendations: Movie[] = [];

  ngOnInit(): void {
    // Extract movie ID from the URL
    const movieIdParam = this.route.snapshot.paramMap.get('id');
    // Check if movieIdParam is not null
    if (movieIdParam !== null) {
      // Convert movieIdParam to a number
      const movieId = +movieIdParam;

      // Call the first API
      this.apiResponse.getMovieDetails(movieId).subscribe((details: any) => {
        // Handle the details API response here
        this.details = details;
        console.log('Details:', details);
      });

      // Call the second API
      this.apiResponse
        .getMovieRecommends(movieId)
        .subscribe((recommends: any) => {
          // Handle the recommendations API response here
          this.recommendations = recommends.results;
          console.log('Recommendations:', recommends);
        });
    } else {
      console.error('Invalid movie ID');
    }
  }

  getFilledStarsCount(vote_average: number): number {
    // Calculate the number of filled stars based on the rating
    return Math.round((vote_average / 100) * 5);
  }

  // heart icon color black
  fillColor: string = '#000000';
  //change its color on click
  changeFillColor(): void {
    this.fillColor = this.fillColor === '#000000' ? '#ffe353' : '#000000';
  }

  preventHeartClick(event: Event): void {
    // Prevent the click event from propagating to the card
    event.stopPropagation();
  }

  navigateToDetails(movieId: number): void {
    this.router.navigate(['/movie-details', movieId]);
  }
}
