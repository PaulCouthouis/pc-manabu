import { Component, OnInit, Input } from '@angular/core';
import { Correction, TypeCorrection } from '../game.model';

@Component({
  selector: 'mnb-game-correction',
  templateUrl: './game-correction.component.html',
  styleUrls: ['./game-correction.component.scss']
})
export class GameCorrectionComponent implements OnInit {
  @Input() corrections: Correction[];

  get type(): typeof TypeCorrection {
    return TypeCorrection;
  }

  get lblType(): {} {
    return {
      [this.type.On]: '音読み',
      [this.type.Kon]: '訓読み',
      [this.type.Translation]: 'フランス語翻訳'
    };
  }

  constructor() {}

  ngOnInit() {
    console.log(this.corrections);
  }
}
