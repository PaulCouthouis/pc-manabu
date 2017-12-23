import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSetComponent } from './game-set.component';

describe('GameSetComponent', () => {
  let component: GameSetComponent;
  let fixture: ComponentFixture<GameSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
