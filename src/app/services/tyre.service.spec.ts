import { TestBed, inject } from '@angular/core/testing';

import { TyreService } from './tyre.service';

describe('TyreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TyreService]
    });
  });

  it('should be created', inject([TyreService], (service: TyreService) => {
    expect(service).toBeTruthy();
  }));
});
