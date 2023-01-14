import { Dispatch } from 'react';
import { createContext, useContext, PropsWithChildren, useReducer } from 'react';

type TState = { current: string; skip?: boolean; time?: number };
type TAction = { type: string; payload?: TState };

interface IInputStateProps {
  state: TState;
  dispatch: Dispatch<TAction>;
}

const InputStateContext = createContext<IInputStateProps | undefined>(undefined);

const inputStateReducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case 'set.current': {
      if (state.current.length > 3) {
        return state;
      }
      return {
        ...state,
        current: state.current + action.payload?.current,
        ...(!state.time ? { time: new Date().getTime() } : {}),
      };
    }
    case 'set.current.backspace': {
      return { ...state, current: state.current.slice(0, -1) };
    }
    case 'set.current.clear': {
      return { ...state, current: '', skip: false, time: undefined };
    }
    case 'set.current.skip': {
      return { ...state, skip: true, ...(!state.time ? { time: new Date().getTime() } : {}) };
    }
    default:
      return state;
  }
};

export const InputStateProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(inputStateReducer, { current: '' });

  const value = { state, dispatch };

  return <InputStateContext.Provider value={value}>{children}</InputStateContext.Provider>;
};

export const useInputState = () => {
  const context = useContext(InputStateContext);

  if (context === undefined) {
    throw new Error('useInputState must be used within InputStateProvider');
  }

  return context;
};
