import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it, vitest } from 'vitest';
import RadioGroupToggle from './RadioGroupToggle.svelte';

describe('RadioGroupToggle', () => {
  it('should render unmarked and unlocked toggle icons', () => {
    render(RadioGroupToggle, { props: { isMarked: false, isLocked: false }});
    
    expect(screen.getByTestId('unlocked')).toBeVisible();
    expect(screen.getByTestId('unmarked')).toBeVisible();
  });

  it('should render marked and locked toggle icons', () => {
    render(RadioGroupToggle, { props: { isMarked: true, isLocked: true }});
    
    expect(screen.getByTestId('locked')).toBeVisible();
    expect(screen.getByTestId('marked')).toBeVisible();
  });

  it('should toggle the toggle icons', () => {
    const { component } = render(RadioGroupToggle, { props: { isMarked: false, isLocked: false }});
    const mockToggleLocked = vitest.fn();
    const mockToggleMarked = vitest.fn();
    
    component.$on("toggle-locked", (e) => {
      mockToggleLocked(e.detail);
    });
    component.$on("toggle-marked", (e) => {
      mockToggleMarked(e.detail);
    });
    
    fireEvent.click(screen.getByTestId('unlocked'));
    fireEvent.click(screen.getByTestId('unmarked'));
    
    expect(mockToggleLocked).toHaveBeenCalledWith(true);
    expect(mockToggleMarked).toHaveBeenCalledWith(true);
  });
});