import { Routes, RouterModule } from '@angular/router';
import { MoviesHomeListComponent } from './movies-home-list/movies-home-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: MoviesHomeListComponent,
    title: 'Home',
  },
  {
    path: 'watchlist',
    component: WatchlistComponent,
    title: 'watchlist',
  },
  // this is useless
  // {
  //   path: 'counter',
  //   component: CounterComponent,
  //   title: 'counter',
  // },
  { path: 'movie-details/:id', component: MoviedetailsComponent },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

// added this coz of an error
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
