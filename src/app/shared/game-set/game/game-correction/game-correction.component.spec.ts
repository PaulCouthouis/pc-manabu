import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCorrectionComponent } from './game-correction.component';

describe('GameCorrectionComponent', () => {
  let component: GameCorrectionComponent;
  let fixture: ComponentFixture<GameCorrectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameCorrectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
