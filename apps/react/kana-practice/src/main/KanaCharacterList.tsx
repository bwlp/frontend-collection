import { KanaCharacter } from './KanaCharacter';
import { ICharacterListHistory } from './types';

interface IProps {
  history: ICharacterListHistory[];
}

export const KanaCharacterList = ({ history }: IProps) => (
  <section className="max-w-3xl mx-auto">
    <section className="kana-character-list" data-testid="characterList">
      {history.length > 0 ? (
        history
          .map((item, index) => (
            <KanaCharacter actual={item.character} input={item.input} key={index} time={item.time} type={item.type} />
          ))
          .reverse()
      ) : (
        <div
          className="text-base w-full flex items-center bg-gray-200 bg-opacity-90 m-1 rounded px-2 py-4"
          data-testid="emptyCardMessage"
        >
          Type the sound of the character. Press ENTER to skip.
        </div>
      )}
    </section>
  </section>
);
