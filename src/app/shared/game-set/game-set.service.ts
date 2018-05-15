import { Injectable } from '@angular/core';
import { Content, TypeContent } from './game/game.model';
import {
  PettoYaKachikuNoTango,
  ShuyouNaDoushi,
  FuransugoNamae,
  ShuKanji,
  HarouinNoKaibutsu1,
  HarouinNoKaibutsu2,
  ZerudaNoDensetsu1,
  ZerudaNoDensetsu2,
  NichijouNoFuku1,
  NichijouNoFuku2,
  KodaiEjiputo,
  SuupaaMario,
  KuniguniNoYobikani1,
  KonchuuYaHachuuruiNoTango1,
  KuniguniNoYobikani2,
  Dizunii,
  ZerudaNoDensetsu3,
  IroNoTango1,
  IroNoTango2,
  BalentainDe1,
  KurisumasuIbu1,
  KazokuNoTango1,
  KihonshokuhinNoTango1,
  Naruto,
  ShisetsuNoTango1,
  ShisetsuNoTango2,
  FuransuNoNamaeToBasho,
  NihonChizu1,
  BalentainDe2,
  IchiNoTango1,
  KuniguniNoYobikani3,
  SunahamadeNoBakansu1,
  KateiYouhinNoTango1,
  IchiNoTango2,
  DoushiToMizuumi,
  KateiYouhinNoTango2,
  DoragonBooru1,
  HoukouNoDoushi,
  NoRiMonoNoTango1,
  NoRiMonoNoTango2,
  DoragonBooru2,
  DoushiToKenkou,
  JintaiNoTango1,
  JintaiNoTango2,
  NichiJi1,
  DesuNouto,
  JikanNoTango1,
  JikanNoTango2,
  KihonshokuhinNoTango2,
  NihonChizu2,
  YoubiNoYobikataToTaiyoukei,
  NichiJi2,
  Jinsei,
  YaseiDoubutsuNoTango1,
  YaseiDoubutsuNoTango2,
  KazokuNoTango2,
  MononokeNoHime,
  SekaiNoKudamono1,
  SekaiNoKudamono2,
  KonchuuYaHachuuruiNoTango2,
  Ryokou,
  Fukushi,
  Metarugi,
  SunahamadeNoBakansu2,
  FukushiRyuushi,
  IeNoHeyaNoTango1,
  IeNoHeyaNoTango2,
  KimiNoNaWa,
  KurisumasuIbu2,
  MattanRyuushi
} from '../../words/vocabulary/_index';
import {
  BunshouNoKeisei,
  JoshiNo,
  JoshiTo,
  JoshiYa,
  JoshiHa,
  JoshiNi,
  JoshiDe,
  JoshiHe,
  JoshiWo,
  JikanNoHokan,
  JoshiKaraToMade,
  JoshiGa,
  JoshiMo,
  JoshiYori,
  FukushiToFukushiNoRyuushi,
  BunmatsuNoRyuushi
} from '../../words/grammar/_index';

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
    return Fukushi.words.map(content => {
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
