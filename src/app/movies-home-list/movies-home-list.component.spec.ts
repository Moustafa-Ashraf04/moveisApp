import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesHomeListComponent } from './movies-home-list.component';

describe('MoviesHomeListComponent', () => {
  let component: MoviesHomeListComponent;
  let fixture: ComponentFixture<MoviesHomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesHomeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoviesHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
