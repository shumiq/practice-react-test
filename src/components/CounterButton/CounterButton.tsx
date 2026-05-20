"use client";

import { useCounter } from "../../hooks/useCounter";

export function CounterButton() {
  const { count, increase, decrease } = useCounter();

  const isEven = count % 2 === 0;
  const colorClass = isEven
    ? "bg-red-600 hover:bg-red-700 focus:ring-red-500"
    : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={decrease}
        disabled={count <= 0}
        className="rounded-xl bg-gray-600 px-4 py-3 text-base font-semibold text-white transition-all hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        -
      </button>
      <button
        type="button"
        onClick={increase}
        disabled={count >= 10}
        className={`rounded-xl px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${colorClass}`}
      >
        Count: {count}
      </button>
    </div>
  );
}
