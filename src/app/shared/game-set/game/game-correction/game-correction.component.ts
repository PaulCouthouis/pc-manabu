import { Component, OnInit, Input } from '@angular/core';
import { Correction, TypeForm } from '../game.model';

@Component({
  selector: 'mnb-game-correction',
  templateUrl: './game-correction.component.html',
  styleUrls: ['./game-correction.component.scss']
})
export class GameCorrectionComponent implements OnInit {
  @Input() corrections: Correction[];

  get type(): typeof TypeForm {
    return TypeForm;
  }

  get lblType(): {} {
    return {
      [this.type.On]: '音読み',
      [this.type.Kon]: '訓読み',
      [this.type.FrenchTranslation]: 'フランス語翻訳',
      [this.type.JapaneseTranslation]: '日本語翻訳'
    };
  }

  constructor() {}

  ngOnInit() {}
}
