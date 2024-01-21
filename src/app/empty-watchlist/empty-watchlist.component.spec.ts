import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyWatchlistComponent } from './empty-watchlist.component';

describe('EmptyWatchlistComponent', () => {
  let component: EmptyWatchlistComponent;
  let fixture: ComponentFixture<EmptyWatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyWatchlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
