import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { CounterButton } from './CounterButton';

describe('CounterButton (integration)', () => {
  it('increments count on click', async () => {
    const user = userEvent.setup();
    render(<CounterButton />);
    const countButton = screen.getByRole('button', { name: /^Count:/ });
    await user.click(countButton);
    expect(countButton).toHaveTextContent('Count: 1');
  });

  it.todo('does not go above 10');
});
