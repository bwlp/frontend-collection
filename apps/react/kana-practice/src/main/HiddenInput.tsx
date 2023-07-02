import { useInputState } from './InputStateContext';

export const HiddenInput = () => {
  const { dispatch } = useInputState();

  return (
    <input
      className="opacity-0 absolute h-full w-full cursor-pointer"
      data-testid="hiddenInput"
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
    />
  );
};
