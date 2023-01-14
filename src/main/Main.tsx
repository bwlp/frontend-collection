import { usePressKey } from './usePressKey';
import { KanaCharacterList } from './KanaCharacterList';

export const Main = () => {
  usePressKey();

  return (
    <div>
      <KanaCharacterList />
    </div>
  );
};
