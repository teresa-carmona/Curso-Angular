import { TestBed } from '@angular/core/testing';

import { DiceServiceService } from './dice-service.service';

describe('DiceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiceServiceService = TestBed.get(DiceServiceService);
    expect(service).toBeTruthy();
  });
});
