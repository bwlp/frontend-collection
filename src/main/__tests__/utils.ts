import { generateNewCharacter } from '../utils';

describe('main -> utils', () => {
  describe('generateNewCharacter', () => {
    it(`should generate a random character that has not appeared for at least 10 times`, () => {
      const history = ['a','ka', 'sa', 'ta', 'na', 'ha', 'ma', 'ya', 'ra', 'wa']
      const formattedHistory = history.map((character) => ({ character, input: character, time: 0, type: 'hiragana' as const }));

      expect(history.includes(generateNewCharacter(formattedHistory))).toBe(false)
    });
  })
})