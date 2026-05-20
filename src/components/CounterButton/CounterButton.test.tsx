import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { CounterButton } from './CounterButton';

describe('CounterButton', () => {
  it('renders with initial count of 0', () => {
    render(<CounterButton />);
    expect(screen.getByRole('button')).toHaveTextContent('Count: 0');
  });

  it('increments count on click', async () => {
    const user = userEvent.setup();
    render(<CounterButton />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(button).toHaveTextContent('Count: 1');
  });

  it('increments count on multiple clicks', async () => {
    const user = userEvent.setup();
    render(<CounterButton />);

    const button = screen.getByRole('button');
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(button).toHaveTextContent('Count: 3');
  });
});
