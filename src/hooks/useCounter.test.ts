import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('returns initial count of 0 by default', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('increases count by 1', () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increase());
    expect(result.current.count).toBe(1);
  });

  it.todo('accepts an initial value');

  it.todo('clamps initial value below 0');

  it.todo('does not increase above 10');
});
