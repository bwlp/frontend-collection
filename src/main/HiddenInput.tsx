import { useInputState } from './InputStateContext';

export const HiddenInput = () => {
  const { dispatch } = useInputState();

  return (
    <input
      onChange={(e) => {
        const key = e.target.value;
        if (/^[a-z]$/i.test(key)) {
          dispatch({ type: 'set.current', payload: { current: key.toLowerCase() } });
        }
      }}
      onKeyDown={({ key }) => {
        if (key === 'Backspace') {
          dispatch({ type: 'set.current.backspace' });
        }
        if (key === 'Enter') {
          dispatch({ type: 'set.current.skip' });
        }
      }}
      value=""
      className="hidden-input"
      data-testid="hiddenInput"
    />
  );
};
