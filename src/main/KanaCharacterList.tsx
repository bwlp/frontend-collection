import { generateNewCharacter } from './utils';
import { useState, useEffect, KeyboardEvent } from 'react';
import { useInputState } from './InputStateContext';
import { ICharacterListHistory, TCharacterType } from './types';
import { KanaCharacter } from './KanaCharacter';

export const KanaCharacterList = () => {
  const { state, dispatch } = useInputState();
  const [history, setHistory] = useState<ICharacterListHistory[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState('');
  const [type, setType] = useState<TCharacterType>('hiragana');

  useEffect(() => {
    if (!currentCharacter) {
      setCurrentCharacter(generateNewCharacter(history));
    } else if (state.current === currentCharacter || state.skip) {
      dispatch({ type: 'set.current.clear' });
      setHistory(
        history.concat({
          character: currentCharacter,
          input: state.current,
          time: state.time ? new Date().getTime() - state.time : 0,
          type,
        })
      );
      setCurrentCharacter('');
    }
  }, [currentCharacter, setCurrentCharacter, history, setHistory, state, dispatch, type]);

  useEffect(() => {
    const localStorageHistory: ICharacterListHistory[] = JSON.parse(localStorage.getItem('history') || '[]');
    if (localStorageHistory.length > 0) {
      setHistory(localStorageHistory);
    }
  }, [setHistory]);

  const selectHiragana = () => setType('hiragana');
  const selectKatakana = () => setType('katakana');
  const saveHistory = () => localStorage.setItem('history', JSON.stringify(history));

  return (
    <div className="character-list-container">
      <div className="character-list-header-container">
        <KanaCharacter type={type} hasInput actual={currentCharacter} input={state.current} />
        <div className="character-list-config" data-testid="characterListConfig">
          <div
            role="button"
            tabIndex={0}
            onClick={selectHiragana}
            onKeyDown={callFunctionWhenSpacePressed(selectHiragana)}
            className={type === 'hiragana' ? 'active' : ''}
          >
            Hiragana
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={selectKatakana}
            onKeyDown={callFunctionWhenSpacePressed(selectKatakana)}
            className={type === 'katakana' ? 'active' : ''}
          >
            Katakana
          </div>
          <div
            role="button"
            tabIndex={0}
            onClick={saveHistory}
            onKeyDown={callFunctionWhenSpacePressed(saveHistory)}
            className="save-button"
          >
            Save
          </div>
        </div>
      </div>
      <div className="character-list">
        {history.length > 0 ? (
          history
            .map((item, index) => (
              <KanaCharacter type={item.type} key={index} actual={item.character} input={item.input} time={item.time} />
            ))
            .reverse()
        ) : (
          <div className="character-list-empty">Type the sound of the character. Press ENTER to skip.</div>
        )}
      </div>
    </div>
  );
};

const callFunctionWhenSpacePressed = (callback: () => void) => (e: KeyboardEvent<HTMLDivElement>) =>
  e.code === 'Space' && callback();
