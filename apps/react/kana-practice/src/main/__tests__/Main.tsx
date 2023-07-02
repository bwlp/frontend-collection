import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputStateProvider } from '../InputStateContext';
import { Main } from '../Main';

describe('main -> Main', () => {
  const generateNode = () =>
    render(
      <InputStateProvider>
        <Main />
      </InputStateProvider>
    );

  it('should display the alphabetical letters typed by the user, up to 4 letters', async () => {
    const { baseElement } = generateNode();

    fireEvent.keyDown(baseElement, { key: 'a' });
    fireEvent.keyDown(baseElement, { key: 'b' });
    fireEvent.keyDown(baseElement, { key: ' ' });
    fireEvent.keyDown(baseElement, { key: '1' });
    fireEvent.keyDown(baseElement, { key: 'c' });
    fireEvent.keyDown(baseElement, { key: 'd' });
    fireEvent.keyDown(baseElement, { key: 'e' });
    expect(await screen.findByTestId('inputCharacterValue')).toHaveTextContent('abcd');
  });

  it('should allow the letters to be Backspaced', async () => {
    const { baseElement } = generateNode();

    fireEvent.keyDown(baseElement, { key: 'a' });
    fireEvent.keyDown(baseElement, { key: 'b' });
    fireEvent.keyDown(baseElement, { key: 'Backspace' });
    expect(await screen.findByTestId('inputCharacterValue')).toHaveTextContent('a');
  });

  it('should allow the character to be skipped by pressing enter', async () => {
    const { baseElement } = generateNode();

    fireEvent.keyDown(baseElement, { key: 'a' });
    fireEvent.keyDown(baseElement, { key: 'b' });
    fireEvent.keyDown(baseElement, { key: 'Enter' });
    expect(await screen.findByTestId('inputCharacterValue')).toHaveTextContent('');
    expect(screen.getByTestId('historyCharacterValue')).toHaveTextContent('ab');
  });

  it('should toggle between hiragana (default) and katakana when the buttons are clicked', async () => {
    generateNode();

    expect(screen.getByText('Hiragana')).toHaveClass('active');
    expect(screen.getByText('Katakana')).not.toHaveClass('active');

    await userEvent.click(screen.getByRole('button', { name: 'Katakana' }));
    expect(screen.getByText('Hiragana')).not.toHaveClass('active');
    expect(screen.getByText('Katakana')).toHaveClass('active');

    await userEvent.click(screen.getByRole('button', { name: 'Hiragana' }));
    expect(screen.getByText('Hiragana')).toHaveClass('active');
    expect(screen.getByText('Katakana')).not.toHaveClass('active');
  });
});
