import { TestBed } from '@angular/core/testing';

import { HardCodedAuthenticationServiceService } from './hard-coded-authentication-service.service';

describe('HardCodedAuthenticationServiceService', () => {
  let service: HardCodedAuthenticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodedAuthenticationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
