import {capitalize} from 'lodash';

const skip: string[] = [
  'di',
  'via',
  'piazza',
  'sede',
  'viale',
  'largo',
  'piazzale',
  'stretto',
  'vicolo',
  'piazzetta',
  'località',
  'del',
  'dal'
];

export function capitalizeIt(value: string) {
  return value
    .toLowerCase()
    .split(' ')
    .map((word: string, index: number) => {
      if (index === 0 || !skip.includes(word)) {
        word = word
          .split("'")
          .map((w: string) => parseWord(w))
          .join("'");
      }

      return word;
    })
    .join(' ');
}

function parseWord(word: string) {
  // Se numero romano tutto maiuscolo
  if (!skip.includes(word) && word.match(/^[MDCLXVI]+$/i)) {
    word = word.toUpperCase();
  } else {
    word = capitalize(word);
  }
  return word;
}
