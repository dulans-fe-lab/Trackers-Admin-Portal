import { TestBed } from '@angular/core/testing';

import { BusOwnerManagementService } from './bus-owner-management.service';

describe('BusOwnerManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusOwnerManagementService = TestBed.get(BusOwnerManagementService);
    expect(service).toBeTruthy();
  });
});
