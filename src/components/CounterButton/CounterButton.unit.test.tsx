import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CounterButton } from './CounterButton';

const mockIncrease = vi.fn();
const mockDecrease = vi.fn();
let mockCount = 0;

vi.mock('../../hooks/useCounter', () => ({
  useCounter: () => ({
    count: mockCount,
    increase: mockIncrease,
    decrease: mockDecrease,
  }),
}));

describe('CounterButton (unit)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockCount = 0;
  });

  it('renders count from mocked hook', () => {
    render(<CounterButton />);
    expect(screen.getByRole('button', { name: /^Count:/ })).toHaveTextContent('Count: 0');
  });

  it('calls increase when count button is clicked', async () => {
    const user = userEvent.setup();
    render(<CounterButton />);

    await user.click(screen.getByRole('button', { name: /^Count:/ }));
    expect(mockIncrease).toHaveBeenCalledTimes(1);
  });

  it('calls decrease when decrease button is clicked', async () => {
    const user = userEvent.setup();
    mockCount = 5;
    render(<CounterButton />);

    await user.click(screen.getByRole('button', { name: '-' }));
    expect(mockDecrease).toHaveBeenCalledTimes(1);
  });

  it('decrease button is disabled when count is 0', () => {
    render(<CounterButton />);
    expect(screen.getByRole('button', { name: '-' })).toBeDisabled();
  });

  it('decrease button is enabled when count is greater than 0', () => {
    mockCount = 5;
    render(<CounterButton />);
    expect(screen.getByRole('button', { name: '-' })).not.toBeDisabled();
  });

  it('increase button is disabled when count is 10', () => {
    mockCount = 10;
    render(<CounterButton />);
    expect(screen.getByRole('button', { name: /^Count:/ })).toBeDisabled();
  });

  it('increase button is enabled when count is less than 10', () => {
    mockCount = 5;
    render(<CounterButton />);
    expect(screen.getByRole('button', { name: /^Count:/ })).not.toBeDisabled();
  });

  it('count button has indigo class when count is odd', () => {
    mockCount = 3;
    render(<CounterButton />);
    expect(screen.getByRole('button', { name: /^Count:/ }).className).toContain('bg-indigo-');
  });

  it('count button has red class when count is even', () => {
    mockCount = 4;
    render(<CounterButton />);
    expect(screen.getByRole('button', { name: /^Count:/ }).className).toContain('bg-red-');
  });
});
