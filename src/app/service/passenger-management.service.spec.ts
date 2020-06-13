import { TestBed } from '@angular/core/testing';

import { PassengerManagementService } from './passenger-management.service';

describe('PassengerManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassengerManagementService = TestBed.get(PassengerManagementService);
    expect(service).toBeTruthy();
  });
});
