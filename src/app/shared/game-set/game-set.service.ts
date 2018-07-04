import { Injectable } from '@angular/core';

import { ShitsumonNoTango, ShitiiHantaa } from '../../words/vocabulary/_index';
import { Content, TypeContent } from './game/game.model';

@Injectable()
export class GameSetService {
  private allContent: Content[];
  private iCurrent = 0;
  score = 0;
  limit: number;

  constructor() {
    this.allContent = this.shuffle(this.getContentsOfConfig());
  }

  private getContentsOfConfig(): Content[] {
    return ShitiiHantaa.words.map(content => {
      const type = Math.floor(Math.random() * 2)
        ? TypeContent.FrenchToJapanese
        : TypeContent.JapaneseToFrench;
      const iTranslation =
        type === TypeContent.FrenchToJapanese
          ? Math.floor(Math.random() * content.translation.length)
          : -1;
      return Object.assign({ type, iTranslation }, content);
    });
  }

  private shuffle(content: Content[]): Content[] {
    const newContent = content;
    let iCurrent = newContent.length;
    let tmpValue, iRandom;

    while (iCurrent > 0) {
      iRandom = Math.floor(Math.random() * iCurrent);
      iCurrent--;

      tmpValue = newContent[iCurrent];
      newContent[iCurrent] = newContent[iRandom];
      newContent[iRandom] = tmpValue;
    }

    return newContent;
  }

  get currentContent(): Content {
    const lgth = this.allContent.length;
    this.limit = lgth >= 20 ? 20 : lgth;
    return this.iCurrent < this.limit ? this.allContent[this.iCurrent] : null;
  }

  nextContent(score: number): void {
    this.iCurrent++;
    this.score = this.score + score;
  }
}
