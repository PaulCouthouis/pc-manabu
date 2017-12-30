import { Injectable } from '@angular/core';
import { Content, TypeContent } from './game/game.model';
import { FirstPageKanji } from '../../words/kanji/001-first-page';
import { SeishoNoKotobaVocabulary } from '../../words/vocabulary/001-seisho-no-kotoba';
import { SecondPageKanji } from '../../words/kanji/002-second-page';
import { ReigiVocabulary } from '../../words/vocabulary/002-reigi';
import { ThirdPageKanji } from '../../words/kanji/003-third-page';
import { KateiYouKikiVocabulary } from '../../words/vocabulary/003-katei-you-kiki';
import { KokuMeiVocabulary } from '../../words/vocabulary/004-koku-mei';
import { PettoVocabulary } from '../../words/vocabulary/005-petto';
import { KazokuVocabulary } from '../../words/vocabulary/006-kazoku';
import { IroVocabulary } from '../../words/vocabulary/007-iro';
import { FourthPage } from '../../words/kanji/004-fourth-page';
import { YoubiToTaiyoukeiVocabulary } from '../../words/vocabulary/008-youbi-to-taiyoukei';

@Injectable()
export class GameSetService {
  private allContent: Content[];
  private iCurrent = 0;
  score = 0;

  constructor() {
    this.allContent = this.shuffle(this.getContentsOfConfig());
  }

  private getContentsOfConfig(): Content[] {
    return YoubiToTaiyoukeiVocabulary.words.map(content => {
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
    return this.iCurrent < 20 ? this.allContent[this.iCurrent] : null;
  }

  nextContent(score: number): void {
    this.iCurrent++;
    console.log(score);
    this.score = this.score + score;
    console.log(this.score);
  }
}
