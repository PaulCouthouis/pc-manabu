import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameFormType } from './game-form.model';
import { Proposals } from '../game.model';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'mnb-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit, OnChanges {
  form = new FormGroup({
    on: new FormControl(),
    kon: new FormControl(),
    translation: new FormControl()
  });

  @Input() type: GameFormType;
  @ViewChild('inputOn') inputOn: ElementRef;
  @ViewChild('inputFrenchTranslation') inputFrenchTranslation: ElementRef;
  @ViewChild('inputJapaneseTranslation') inputJapaneseTranslation: ElementRef;

  get value(): Proposals {
    return this.form.value;
  }

  get gameFormType(): typeof GameFormType {
    return GameFormType;
  }

  constructor() {}

  private initFocus() {
    switch (this.type) {
      case GameFormType.KanjiToFrench:
        return this.inputOn.nativeElement.focus();
      case GameFormType.WordToFrench:
        return this.inputFrenchTranslation.nativeElement.focus();
      case GameFormType.FrenchToJapanese:
        return this.inputJapaneseTranslation.nativeElement.focus();
    }
  }

  ngOnInit() {}

  ngOnChanges(): void {
    this.initFocus();
  }
}
