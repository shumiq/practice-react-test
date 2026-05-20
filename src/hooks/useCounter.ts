"use client";

import { useState, useCallback } from "react";

const MIN = 0;
const MAX = 10;

function clamp(value: number) {
  return Math.min(MAX, Math.max(MIN, value));
}

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(clamp(initialValue));

  const increase = useCallback(() => setCount((c) => (c < MAX ? c + 1 : c)), []);
  const decrease = useCallback(() => setCount((c) => (c > MIN ? c - 1 : c)), []);

  return { count, increase, decrease };
}
