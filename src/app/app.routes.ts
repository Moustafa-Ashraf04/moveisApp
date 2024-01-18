import { Routes } from '@angular/router';
import { MoviesHomeListComponent } from './movies-home-list/movies-home-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

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
  // {
  //   path: 'counter',
  //   component: CounterComponent,
  //   title: 'counter',
  // },
  //   {
  //     path: 'product-details/:id',
  //     component: ProductDetailsComponent,
  //   },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
