import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { GameService } from './game.service';
import {
  Proposals,
  Correction,
  Content,
  TypeContent,
  TypeForm
} from './game.model';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { GameFormComponent } from './game-form/game-form.component';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'mnb-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnChanges {
  corrections: Correction[];
  formTypes: TypeForm[];

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
      : this.content.translation[this.content.iTranslation] +
          (this.content.precision ? ' (' + this.content.precision + ')' : '');
  }

  get formValue(): Proposals {
    return this.form ? this.form.value : null;
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    const newContent = changes['content'];
    if (newContent) {
      this.setFormTypes(newContent.currentValue);
    }
  }

  setFormTypes(newContent: Content): TypeForm[] {
    if (this.content.type === TypeContent.FrenchToJapanese) {
      return (this.formTypes = [TypeForm.JapaneseTranslation]);
    }

    const arrTypes = [];

    if (this.content.on) {
      arrTypes.push(TypeForm.On);
    }

    if (this.content.kon) {
      arrTypes.push(TypeForm.Kon);
    }

    return (this.formTypes = [...arrTypes, TypeForm.FrenchTranslation]);
  }

  onClick(formValue: Proposals) {
    if (!this.corrections) {
      this.corrections = this.service.getCorrections(this.content, formValue);
      return;
    }
    this.corrections = null;
    this.closeGame.emit(this.service.score);
  }
}
