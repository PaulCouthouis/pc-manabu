export enum TypeContent {
  FrenchToJapanese,
  JapaneseToFrench
}

export enum TypeForm {
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
  precision?: string;
}

export class Correction {
  type: TypeForm;
  proposal: string;
  isCorrect: boolean;
  solutions: string[];
}

export class Proposals {
  on?: string;
  kon?: string;
  translation: string;
}
