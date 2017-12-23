import { Injectable } from '@angular/core';
import { Correction, Proposals, TypeCorrection } from './game.model';

@Injectable()
export class GameService {
  content = {
    word: '人',
    on: ['ジン', 'ニン'],
    kon: ['ひと'],
    translation: ['être humain', 'homme', 'personne']
  };

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

  getCorrections(proposals: Proposals): Correction[] {
    const on = this.getCorrection(
      this.content.on,
      proposals.on,
      TypeCorrection.On
    );
    const kon = this.getCorrection(
      this.content.kon,
      proposals.kon,
      TypeCorrection.Kon
    );
    const translation = this.getCorrection(
      this.content.translation,
      proposals.translation,
      TypeCorrection.Translation
    );
    return [on, kon, translation];
  }
}
