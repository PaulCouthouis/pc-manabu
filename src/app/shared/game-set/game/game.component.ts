import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { GameService } from './game.service';
import { Proposals, Correction, Content } from './game.model';
import { GameFormType } from './game-form/game-form.model';

@Component({
  selector: 'mnb-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  corrections: Correction[];

  @Input() content: Content;
  @Output() closeGame: EventEmitter<void> = new EventEmitter();

  constructor(private service: GameService) {}

  get lblTitle(): string {
    return '漢字を読む';
  }

  get lblSubmit(): string {
    return !this.corrections ? '確認する' : '以下';
  }

  get toTranslate(): string {
    return this.content.kanji || this.content.word;
  }

  get formType(): GameFormType {
    return this.content.kanji
      ? GameFormType.KanjiToFrench
      : GameFormType.WordToFrench;
  }

  ngOnInit() {}

  onClick(formValue: Proposals) {
    if (!this.corrections) {
      this.corrections = this.service.getCorrections(this.content, formValue);
      return;
    }
    this.corrections = null;
    this.closeGame.emit();
  }
}
