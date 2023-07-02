import { KeyboardEvent } from 'react';
import { useInputState } from './InputStateContext';
import { KanaCharacter } from './KanaCharacter';
import { TCharacterType } from './types';

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
      <KanaCharacter actual={currentCharacter} hasInput input={state.current} type={type} />
      <section className="pt-1 text-right text-neutral-700 text-base" data-testid="characterListConfig">
        <div
          className={`config-button ${type === 'hiragana' ? 'active' : ''}`}
          onClick={selectHiragana}
          onKeyDown={callFunctionWhenSpacePressed(selectHiragana)}
          role="button"
          tabIndex={0}
        >
          Hiragana
        </div>
        <div
          className={`config-button ${type === 'katakana' ? 'active' : ''}`}
          onClick={selectKatakana}
          onKeyDown={callFunctionWhenSpacePressed(selectKatakana)}
          role="button"
          tabIndex={0}
        >
          Katakana
        </div>
        <div
          className="inline-block config-button"
          onClick={saveHistory}
          onKeyDown={callFunctionWhenSpacePressed(saveHistory)}
          role="button"
          tabIndex={0}
        >
          Save
        </div>
      </section>
    </section>
  );
};

const callFunctionWhenSpacePressed = (callback: () => void) => (e: KeyboardEvent<HTMLDivElement>) =>
  e.code === 'Space' && callback();
