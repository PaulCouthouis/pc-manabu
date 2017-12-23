import { Injectable } from '@angular/core';
import {
  Correction,
  Proposals,
  TypeCorrection,
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
    type: TypeCorrection
  ): Correction {
    this.total++;
    const isCorrect = possible.includes(proposal);
    this.good = isCorrect ? this.good + 1 : this.good;

    return {
      type,
      proposal,
      isCorrect: possible.includes(proposal),
      solutions: possible.filter(one => one !== proposal)
    };
  }

  getCorrections(content: Content, proposals: Proposals): Correction[] {
    if (content.type === TypeContent.JapaneseToFrench) {
      const translation = this.getCorrection(
        content.translation,
        proposals.translation,
        TypeCorrection.FrenchTranslation
      );

      if (content.on && content.kon) {
        const on = this.getCorrection(
          content.on,
          proposals.on,
          TypeCorrection.On
        );
        const kon = this.getCorrection(
          content.kon,
          proposals.kon,
          TypeCorrection.Kon
        );

        return [on, kon, translation];
      }

      return [translation];
    }

    return [
      this.getCorrection(
        [content.kanji || content.word],
        proposals.translation,
        TypeCorrection.JapaneseTranslation
      )
    ];
  }
}
