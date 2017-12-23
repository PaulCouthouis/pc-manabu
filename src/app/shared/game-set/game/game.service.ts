import { Injectable } from '@angular/core';
import { Correction, Proposals, TypeCorrection, Content } from './game.model';

@Injectable()
export class GameService {
  constructor() {}

  private getCorrection(
    possible: string[],
    proposal: string,
    type: TypeCorrection
  ): Correction {
    return {
      type,
      proposal,
      isCorrect: possible.includes(proposal),
      solutions: possible.filter(one => one !== proposal)
    };
  }

  getCorrections(content: Content, proposals: Proposals): Correction[] {
    const translation = this.getCorrection(
      content.translation,
      proposals.translation,
      TypeCorrection.Translation
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
}
