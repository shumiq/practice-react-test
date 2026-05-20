"use client";

import { useState } from "react";

export function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setCount((c) => c + 1)}
      className="rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Count: {count}
    </button>
  );
}
