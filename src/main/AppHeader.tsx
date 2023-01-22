import { KeyboardEvent } from 'react';
import { useInputState } from './InputStateContext';
import { TCharacterType } from './types';
import { KanaCharacter } from './KanaCharacter';

interface IProps {
  currentCharacter: string;
  setType: (type: TCharacterType) => void;
  type: TCharacterType;
}

export const AppHeader = ({ currentCharacter, setType, type }: IProps) => {
  const { state } = useInputState();

  const selectHiragana = () => setType('hiragana');
  const selectKatakana = () => setType('katakana');
  const saveHistory = () => localStorage.setItem('history', JSON.stringify(history));

  return (
    <section className="flex justify-between mb-1" data-testid="appHeader">
      <KanaCharacter type={type} hasInput actual={currentCharacter} input={state.current} />
      <section className="pt-1 text-right text-neutral-700 text-base" data-testid="characterListConfig">
        <div
          role="button"
          tabIndex={0}
          onClick={selectHiragana}
          onKeyDown={callFunctionWhenSpacePressed(selectHiragana)}
          className={`config-button ${type === 'hiragana' ? 'active' : ''}`}
        >
          Hiragana
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={selectKatakana}
          onKeyDown={callFunctionWhenSpacePressed(selectKatakana)}
          className={`config-button ${type === 'katakana' ? 'active' : ''}`}
        >
          Katakana
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={saveHistory}
          onKeyDown={callFunctionWhenSpacePressed(saveHistory)}
          className="inline-block config-button"
        >
          Save
        </div>
      </section>
    </section>
  );
};

const callFunctionWhenSpacePressed = (callback: () => void) => (e: KeyboardEvent<HTMLDivElement>) =>
  e.code === 'Space' && callback();
