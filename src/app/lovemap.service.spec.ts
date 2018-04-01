import { TestBed, inject } from '@angular/core/testing';

import { LovemapService } from './lovemap.service';

describe('LovemapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LovemapService]
    });
  });

  it('should be created', inject([LovemapService], (service: LovemapService) => {
    expect(service).toBeTruthy();
  }));
});
