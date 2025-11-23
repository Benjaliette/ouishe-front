import { TestBed } from '@angular/core/testing';

import { WishApiService } from './wish-api.service';

describe('WishApiService', () => {
  let service: WishApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
