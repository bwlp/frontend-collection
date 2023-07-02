export type TCharacterType = 'hiragana' | 'katakana';

export interface ICharacterListHistory {
  type: TCharacterType;
  /** Value of the randomly generated character */
  character: string;
  /** Value of the user input */
  input: string;
  /** How long the user took for this character */
  time: number;
}
