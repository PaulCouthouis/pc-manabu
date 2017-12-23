export enum TypeContent {
  FrenchToJapanese,
  JapaneseToFrench
}

export enum TypeCorrection {
  On,
  Kon,
  JapaneseTranslation,
  FrenchTranslation
}

export class Content {
  type: TypeContent;
  kanji?: string;
  word?: string;
  on?: string[];
  kon?: string[];
  translation: string[];
  iTranslation?: number;
}

export class Correction {
  type: TypeCorrection;
  proposal: string;
  isCorrect: boolean;
  solutions: string[];
}

export class Proposals {
  on?: string;
  kon?: string;
  translation: string;
}
