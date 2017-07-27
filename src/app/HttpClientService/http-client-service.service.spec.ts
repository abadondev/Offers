import { TestBed, inject } from '@angular/core/testing';

import { HttpClientServiceService } from './http-client-service.service';

describe('HttpClientServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientServiceService]
    });
  });

  it('should ...', inject([HttpClientServiceService], (service: HttpClientServiceService) => {
    expect(service).toBeTruthy();
  }));
});
