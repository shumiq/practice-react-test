import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { CounterButton } from './CounterButton';

describe('CounterButton', () => {
  it('renders with initial count of 0', () => {
    render(<CounterButton />);
    expect(screen.getByRole('button', { name: /^Count:/ })).toHaveTextContent('Count: 0');
  });

  it('decrease button is disabled when count is 0', () => {
    render(<CounterButton />);
    expect(screen.getByRole('button', { name: '-' })).toBeDisabled();
  });

  it('increments count on click', async () => {
    const user = userEvent.setup();
    render(<CounterButton />);

    const countButton = screen.getByRole('button', { name: /^Count:/ });
    await user.click(countButton);

    expect(countButton).toHaveTextContent('Count: 1');
  });

  it('decrease button becomes enabled after increment', async () => {
    const user = userEvent.setup();
    render(<CounterButton />);

    const decreaseButton = screen.getByRole('button', { name: '-' });
    const countButton = screen.getByRole('button', { name: /^Count:/ });

    await user.click(countButton);
    expect(countButton).toHaveTextContent('Count: 1');
    expect(decreaseButton).not.toBeDisabled();
  });

  it('decrements count on decrease click', async () => {
    const user = userEvent.setup();
    render(<CounterButton />);

    const increaseButton = screen.getByRole('button', { name: /^Count:/ });
    const decreaseButton = screen.getByRole('button', { name: '-' });

    await user.click(increaseButton);
    await user.click(increaseButton);
    expect(increaseButton).toHaveTextContent('Count: 2');

    await user.click(decreaseButton);
    expect(increaseButton).toHaveTextContent('Count: 1');
  });

  it('does not go below 0', async () => {
    render(<CounterButton />);

    const decreaseButton = screen.getByRole('button', { name: '-' });
    expect(decreaseButton).toBeDisabled();
  });

  it('does not go above 10', async () => {
    render(<CounterButton />);

    const increaseButton = screen.getByRole('button', { name: /^Count:/ });

    for (let i = 0; i < 15; i++) {
      await userEvent.click(increaseButton);
    }

    expect(increaseButton).toHaveTextContent('Count: 10');
    expect(increaseButton).toBeDisabled();
  });

  it('count button has red class when count is even', () => {
    render(<CounterButton />);
    const countButton = screen.getByRole('button', { name: /^Count:/ });
    expect(countButton.className).toContain('bg-red-');
  });

  it('count button has indigo class when count is odd', async () => {
    const user = userEvent.setup();
    render(<CounterButton />);

    const countButton = screen.getByRole('button', { name: /^Count:/ });
    await user.click(countButton);

    expect(countButton).toHaveTextContent('Count: 1');
    expect(countButton.className).toContain('bg-indigo-');
  });

  it('increments count on multiple clicks', async () => {
    const user = userEvent.setup();
    render(<CounterButton />);

    const increaseButton = screen.getByRole('button', { name: /^Count:/ });
    const decreaseButton = screen.getByRole('button', { name: '-' });

    await user.click(increaseButton);
    await user.click(increaseButton);
    await user.click(increaseButton);

    expect(increaseButton).toHaveTextContent('Count: 3');

    await user.click(decreaseButton);
    await user.click(decreaseButton);

    expect(increaseButton).toHaveTextContent('Count: 1');
  });
});
