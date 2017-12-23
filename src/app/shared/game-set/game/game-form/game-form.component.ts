import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameFormType } from './game-form.model';
import { Proposals } from '../game.model';

@Component({
  selector: 'mnb-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {
  form = new FormGroup({
    on: new FormControl(),
    kon: new FormControl(),
    translation: new FormControl()
  });

  @Input() type: GameFormType;

  get value(): Proposals {
    return this.form.value;
  }

  get gameFormType(): typeof GameFormType {
    return GameFormType;
  }

  constructor() {}

  ngOnInit() {}
}
