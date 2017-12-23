import { TestBed, inject } from '@angular/core/testing';

import { GameSetService } from './game-set.service';

describe('GameSetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameSetService]
    });
  });

  it('should be created', inject([GameSetService], (service: GameSetService) => {
    expect(service).toBeTruthy();
  }));
});
