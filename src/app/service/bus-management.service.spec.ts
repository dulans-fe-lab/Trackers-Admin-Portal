import { TestBed } from '@angular/core/testing';

import { BusManagementService } from './bus-management.service';

describe('BusManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusManagementService = TestBed.get(BusManagementService);
    expect(service).toBeTruthy();
  });
});
