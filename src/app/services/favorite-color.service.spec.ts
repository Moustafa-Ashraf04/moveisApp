import { TestBed } from '@angular/core/testing';

import { FavoriteColorService } from './favorite-color.service';

describe('FavoriteColorService', () => {
  let service: FavoriteColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
