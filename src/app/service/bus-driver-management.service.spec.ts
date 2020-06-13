import { TestBed } from '@angular/core/testing';

import { BusDriverManagementService } from './bus-driver-management.service';

describe('BusDriverManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusDriverManagementService = TestBed.get(BusDriverManagementService);
    expect(service).toBeTruthy();
  });
});
