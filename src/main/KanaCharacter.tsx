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
      <div className="kana-character-block kana-input-field" data-testid="inputCharacter">
        <div className="character-list-item-input text-xl leading-normal left-2" data-testid="inputCharacterValue">
          {input}
          <div className="border-b border-black border-solid inline-block w-1 animate-flash" />
        </div>
        {characterJson[actual]}
        {isMobile() && <HiddenInput />}
      </div>
    );
  }

  // history characters
  return (
    <div className="kana-character-block" data-testid="historyCharacter">
      <div className="character-list-item-actual">{actual}</div>
      <div
        className={`character-list-item-input ${actual === input ? 'text-green-600' : 'text-red-500'}`}
        data-testid="historyCharacterValue"
      >
        {input}
      </div>
      <div className="character-list-item-time">{Math.round(time * 100) / 100000}s</div>
      {characterJson[actual]}
    </div>
  );
};
