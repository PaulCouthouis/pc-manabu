export enum TypeCorrection {
  On,
  Kon,
  Translation
}

export class Correction {
  type: TypeCorrection;
  proposal: string;
  isCorrect: boolean;
  solutions: string[];
}

export class Proposals {
  on: string;
  kon: string;
  translation: string;
}
