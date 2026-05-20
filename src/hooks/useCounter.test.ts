import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('returns initial count of 0 by default', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('accepts an initial value', () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  it('clamps initial value above 10', () => {
    const { result } = renderHook(() => useCounter(20));
    expect(result.current.count).toBe(10);
  });

  it('clamps initial value below 0', () => {
    const { result } = renderHook(() => useCounter(-5));
    expect(result.current.count).toBe(0);
  });

  it('increases count by 1', () => {
    const { result } = renderHook(() => useCounter());
    act(() => result.current.increase());
    expect(result.current.count).toBe(1);
  });

  it('decreases count by 1', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => result.current.decrease());
    expect(result.current.count).toBe(4);
  });

  it('does not increase above 10', () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => result.current.increase());
    expect(result.current.count).toBe(10);
  });

  it('does not decrease below 0', () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => result.current.decrease());
    expect(result.current.count).toBe(0);
  });

  it('handles multiple increases and decreases within range', () => {
    const { result } = renderHook(() => useCounter(8));
    act(() => result.current.increase());
    act(() => result.current.increase());
    expect(result.current.count).toBe(10);
    act(() => result.current.decrease());
    expect(result.current.count).toBe(9);
  });
});
