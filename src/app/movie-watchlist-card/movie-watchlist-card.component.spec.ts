import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWatchlistCardComponent } from './movie-watchlist-card.component';

describe('MovieWatchlistCardComponent', () => {
  let component: MovieWatchlistCardComponent;
  let fixture: ComponentFixture<MovieWatchlistCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieWatchlistCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieWatchlistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
