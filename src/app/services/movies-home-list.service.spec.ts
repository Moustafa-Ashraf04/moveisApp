import { TestBed } from '@angular/core/testing';

import { MoviesHomeListService } from './movies-home-list.service';

describe('MoviesHomeListService', () => {
  let service: MoviesHomeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesHomeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
