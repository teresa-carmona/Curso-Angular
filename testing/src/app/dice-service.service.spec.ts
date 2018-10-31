import { TestBed } from '@angular/core/testing';

import { DiceServiceService } from './dice-service.service';

describe('DiceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiceServiceService = TestBed.get(DiceServiceService);
    expect(service).toBeTruthy();
  });

  it('should return a number between 1 and 6', () => {
    const service: DiceServiceService = TestBed.get(DiceServiceService);
    expect(service.throwDice()).toBeLessThanOrEqual(6);
    expect(service.throwDice()).toBeGreaterThanOrEqual(1);
  });

});
