import { useCallback, useEffect } from 'react';
import { useInputState } from './InputStateContext';
import { isMobile } from './utils';

export const usePressKey = () => {
  const { dispatch } = useInputState();

  const updateCurrentInput = useCallback(
    ({ key }: KeyboardEvent) => {
      if (/^[a-z]$/i.test(key)) {
        dispatch({ type: 'set.current', payload: { current: key.toLowerCase() } });
      }
      if (key === 'Backspace') {
        dispatch({ type: 'set.current.backspace' });
      }
      if (key === 'Enter') {
        dispatch({ type: 'set.current.skip' });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (!isMobile()) {
      document.addEventListener('keydown', updateCurrentInput);
    }
    return () => {
      document.removeEventListener('keydown', updateCurrentInput);
    };
  }, [updateCurrentInput]);
};
