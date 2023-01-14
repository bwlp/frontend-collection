import { render, screen } from '@testing-library/react';
import { KanaCharacter } from '../KanaCharacter';
import { InputStateProvider } from '../InputStateContext';
import * as utils from '../utils';

describe('main -> KanaCharacter', () => {
  it('should not show the actual values for "Input" characters', () => {
    const { container } = render(<KanaCharacter actual="zo" input="" hasInput />);

    expect(screen.queryByText('zo')).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  describe('History List', () => {
    it('should show the actual values for characters', () => {
      const { container } = render(<KanaCharacter actual="zo" input="zo" />);

      expect(screen.getAllByText('zo')).toHaveLength(2);
      expect(screen.getAllByText('zo')[1]).toHaveClass('correct');
      expect(container).toMatchSnapshot();
    });

    it('should show an incorrect class for incorrect inputs', () => {
      render(<KanaCharacter actual="zo" input="bu" />);

      expect(screen.getByText('bu')).toHaveClass('incorrect');
    });

    it('should convert the time from milliseconds into seconds', () => {
      render(<KanaCharacter actual="zo" input="zo" time={12345} />);

      expect(screen.getByText('12.345s')).toBeVisible();
    });
  });

  describe('Hidden Input', () => {
    it('should not render the hidden input when the device is not mobile', () => {
      jest.spyOn(utils, 'isMobile').mockReturnValue(false);

      render(
        <InputStateProvider>
          <KanaCharacter hasInput actual="zo" input="zo" time={12345} />
        </InputStateProvider>
      );

      expect(screen.queryByTestId('hiddenInput')).not.toBeInTheDocument();
    });

    it('should render the hidden input when the device is mobile', () => {
      jest.spyOn(utils, 'isMobile').mockReturnValue(true);

      render(
        <InputStateProvider>
          <KanaCharacter hasInput actual="zo" input="zo" time={12345} />
        </InputStateProvider>
      );

      expect(screen.getByTestId('hiddenInput')).toBeVisible();
    });
  });
});
