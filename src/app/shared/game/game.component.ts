import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from './game.service';
import { Proposals, Correction } from './game.model';

@Component({
  selector: 'mnb-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  lblTitle = '漢字を読む';
  lblSubmit = '確認する';

  corrections: Correction[];

  constructor(private service: GameService) {}

  get toTranslate(): string {
    return this.service.content.word;
  }

  ngOnInit() {}

  onClick(formValue: Proposals) {
    this.corrections = this.service.getCorrections(formValue);
  }
}
