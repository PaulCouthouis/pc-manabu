import * as UUID from 'uuid-js';

export const ReigiVocabulary = {
  title: '礼儀',
  words: [
    {
      id: UUID.create(),
      word: 'はい',
      translation: ['oui']
    },
    {
      id: UUID.create(),
      word: 'いいえ',
      translation: ['non']
    },
    {
      id: UUID.create(),
      word: 'お願いします',
      translation: [`s'il vous plait`, `s'il te plait`]
    },
    {
      id: UUID.create(),
      word: 'ありがとう',
      translation: ['merci']
    },
    {
      id: UUID.create(),
      word: 'どういたしまして',
      translation: [`il n'y a pas de quoi`]
    },
    {
      id: UUID.create(),
      word: 'おはよう',
      translation: ['bonjour'],
      precision: 'matin'
    },
    {
      id: UUID.create(),
      word: 'こんにちは',
      translation: ['bonjour'],
      precision: 'après-midi'
    },
    {
      id: UUID.create(),
      word: 'こんばんは',
      translation: ['bonsoir']
    },
    {
      id: UUID.create(),
      word: 'お元気ですか',
      translation: ['comment vas-tu']
    },
    {
      id: UUID.create(),
      word: 'はい、元気です',
      translation: ['oui, je vais bien', 'je vais bien']
    },
    {
      id: UUID.create(),
      word: 'さようなら',
      translation: ['au revoir'],
      precision: 'adieu'
    },
    {
      id: UUID.create(),
      word: 'またね',
      translation: ['au revoir'],
      precision: 'à la prochaine'
    },
    {
      id: UUID.create(),
      word: 'おやすみ',
      translation: ['bonne nuit']
    },
    {
      id: UUID.create(),
      word: 'また明日',
      translation: ['à demain']
    },
    {
      id: UUID.create(),
      word: '初めまして',
      translation: ['enchanté']
    },
    {
      id: UUID.create(),
      word: 'どうぞよろしくお願いします',
      translation: ['ravi de faire votre connaissance']
    },
    {
      id: UUID.create(),
      word: 'どうぞ',
      translation: ['je vous en prie']
    },
    {
      id: UUID.create(),
      word: 'いただきます',
      translation: ['bon appétit']
    },
    {
      id: UUID.create(),
      word: 'すみません',
      translation: ['excuse-moi']
    },
    {
      id: UUID.create(),
      word: 'ごめん',
      translation: ['pardonne-moi']
    },
    {
      id: UUID.create(),
      word: 'お疲れ様でした',
      translation: ['bon travail']
    },
    {
      id: UUID.create(),
      word: 'いってきます',
      translation: [`j'y vais`]
    },
    {
      id: UUID.create(),
      word: 'いってらっしゃい',
      translation: ['bonne journée']
    },
    {
      id: UUID.create(),
      word: 'ただいま',
      translation: ['je suis rentré']
    },
    {
      id: UUID.create(),
      word: 'おかえり',
      translation: ['bon retour']
    },
    {
      id: UUID.create(),
      word: 'いらっしゃいませ',
      translation: ['bienvenue'],
      precision: 'magasin'
    },
    {
      id: UUID.create(),
      word: 'ようこそ',
      translation: ['bienvenue'],
      precision: 'general'
    },
    {
      id: UUID.create(),
      word: 'お邪魔します',
      translation: ['je rentre']
    }
  ]
};
