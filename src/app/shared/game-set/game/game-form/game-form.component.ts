import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Proposals, TypeForm } from '../game.model';
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

  @Input() types: TypeForm[];
  @ViewChild('inputOn') inputOn: ElementRef;
  @ViewChild('inputKon') inputKon: ElementRef;
  @ViewChild('inputFrenchTranslation') inputFrenchTranslation: ElementRef;
  @ViewChild('inputJapaneseTranslation') inputJapaneseTranslation: ElementRef;

  get value(): Proposals {
    return this.form.value;
  }

  get typeForm(): typeof TypeForm {
    return TypeForm;
  }

  constructor() {}

  private initFocus(): void {
    const focusOn = this.types[0];

    switch (focusOn) {
      case TypeForm.On:
        return this.inputOn.nativeElement.focus();
      case TypeForm.Kon:
        return this.inputOn.nativeElement.focus();
      case TypeForm.FrenchTranslation:
        return this.inputFrenchTranslation.nativeElement.focus();
      case TypeForm.JapaneseTranslation:
        return this.inputJapaneseTranslation.nativeElement.focus();
    }
  }

  hasType(type: TypeForm): boolean {
    return this.types.includes(type);
  }

  ngOnInit() {}

  ngOnChanges(): void {
    console.log('mdr');
    this.initFocus();
  }
}
