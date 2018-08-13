import { TestBed, inject } from '@angular/core/testing';

import { TestgroupService } from './testgroup.service';

describe('TestgroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestgroupService]
    });
  });

  it('should be created', inject([TestgroupService], (service: TestgroupService) => {
    expect(service).toBeTruthy();
  }));
});
