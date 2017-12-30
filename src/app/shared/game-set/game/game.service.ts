import { Injectable } from '@angular/core';
import {
  Correction,
  Proposals,
  TypeForm,
  Content,
  TypeContent
} from './game.model';

@Injectable()
export class GameService {
  private total = 0;
  private good = 0;

  constructor() {}

  get score(): number {
    return this.good / this.total;
  }

  private getCorrection(
    possible: string[],
    proposal: string,
    type: TypeForm
  ): Correction {
    this.total++;
    const isCorrect = possible.includes(proposal);
    this.good = isCorrect ? this.good + 1 : this.good;

    console.log(possible, proposal);

    return {
      type,
      proposal,
      isCorrect: possible.includes(proposal),
      solutions: possible.filter(one => one !== proposal)
    };
  }

  getCorrections(content: Content, proposals: Proposals): Correction[] {
    this.total = this.good = 0;
    if (content.type === TypeContent.JapaneseToFrench) {
      const translation = this.getCorrection(
        content.translation,
        proposals.translation,
        TypeForm.FrenchTranslation
      );

      if (content.on && content.kon) {
        const on = this.getCorrection(content.on, proposals.on, TypeForm.On);
        const kon = this.getCorrection(
          content.kon,
          proposals.kon,
          TypeForm.Kon
        );

        return [on, kon, translation];
      }

      return [translation];
    }

    return [
      this.getCorrection(
        [content.kanji || content.word],
        proposals.translation,
        TypeForm.JapaneseTranslation
      )
    ];
  }
}
