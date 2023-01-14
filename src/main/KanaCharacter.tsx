import hiragana from './data/hiragana.json';
import katakana from './data/katakana.json';
import { isMobile } from './utils';
import { HiddenInput } from './HiddenInput';
import { TCharacterType } from './types';

interface IKanaCharacterProps {
  type?: TCharacterType;
  actual: string;
  input: string;
  /** time in milliseconds */
  time?: number;
  /** Use this for the character which allows input */
  hasInput?: boolean;
}

export const KanaCharacter = ({
  type = 'hiragana',
  actual,
  input,
  time = 0,
  hasInput = false,
}: IKanaCharacterProps) => {
  const characterJson: Record<string, string> = type === 'hiragana' ? hiragana : katakana;
  // is the input character
  if (hasInput) {
    return (
      <div className="character-list-item has-input" data-testid="inputCharacter">
        <div className="character-list-item-input" data-testid="inputCharacterValue">
          {input}
          <div className="flashing-underscore" />
        </div>
        {characterJson[actual]}
        {isMobile() && <HiddenInput />}
      </div>
    );
  }
  // history characters
  return (
    <div className="character-list-item" data-testid="historyCharacter">
      <div className="character-list-item-actual">{actual}</div>
      <div
        className={`character-list-item-input ${actual === input ? 'correct' : 'incorrect'}`}
        data-testid="historyCharacterValue"
      >
        {input}
      </div>
      <div className="character-list-item-time">{Math.round(time * 100) / 100000}s</div>
      {characterJson[actual]}
    </div>
  );
};
