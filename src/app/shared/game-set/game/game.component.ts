import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { GameService } from './game.service';
import { Proposals, Correction, Content, TypeContent } from './game.model';
import { GameFormType } from './game-form/game-form.model';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { GameFormComponent } from './game-form/game-form.component';

@Component({
  selector: 'mnb-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  corrections: Correction[];

  @Input() content: Content;
  @Output() closeGame: EventEmitter<number> = new EventEmitter();
  @ViewChild(GameFormComponent) form: GameFormComponent;

  constructor(private service: GameService) {}

  get lblTitle(): string {
    return '漢字を読む';
  }

  get lblSubmit(): string {
    return !this.corrections ? '確認する' : '以下';
  }

  get toTranslate(): string {
    return this.content.type === TypeContent.JapaneseToFrench
      ? this.content.kanji || this.content.word
      : this.content.translation[this.content.iTranslation];
  }

  get formType(): GameFormType {
    return this.content.type === TypeContent.FrenchToJapanese
      ? GameFormType.FrenchToJapanese
      : this.content.kanji
        ? GameFormType.KanjiToFrench
        : GameFormType.WordToFrench;
  }

  get formValue(): Proposals {
    return this.form ? this.form.value : null;
  }

  ngOnInit() {}

  onClick(formValue: Proposals) {
    if (!this.corrections) {
      this.corrections = this.service.getCorrections(this.content, formValue);
      return;
    }
    this.corrections = null;
    this.closeGame.emit(this.service.score);
  }
}
