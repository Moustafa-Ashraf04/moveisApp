import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHomeCardComponent } from './movie-home-card.component';

describe('MovieHomeCardComponent', () => {
  let component: MovieHomeCardComponent;
  let fixture: ComponentFixture<MovieHomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieHomeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieHomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
