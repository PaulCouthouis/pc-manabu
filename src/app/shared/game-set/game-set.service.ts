import { Injectable } from '@angular/core';
import { Content } from './game/game.model';
import { FirstPageKanji } from '../../words/kanji/001-first-page';

@Injectable()
export class GameSetService {
  private allContent: Content[];
  private iCurrent = 0;

  constructor() {
    this.allContent = this.shuffle(FirstPageKanji.words);
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
    return this.iCurrent < 20 ? this.allContent[this.iCurrent] : null;
  }

  nextContent(): void {
    this.iCurrent++;
  }
}
