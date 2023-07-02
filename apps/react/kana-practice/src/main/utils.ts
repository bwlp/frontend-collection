import hiragana from './data/hiragana.json';
import { ICharacterListHistory } from './types';

export const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/** dont generate the same character for at least 10 characters */
export const generateNewCharacter = (history: ICharacterListHistory[]) => {
  const characterList = Object.keys(hiragana);
  const lastTenCharacters = history.slice(-10).map(({ character }) => character);

  let newCharacter = '';

  while (!newCharacter || lastTenCharacters.includes(newCharacter)) {
    const randomValue = Math.floor(Math.random() * characterList.length);
    newCharacter = characterList[randomValue];
  }

  return newCharacter;
};
