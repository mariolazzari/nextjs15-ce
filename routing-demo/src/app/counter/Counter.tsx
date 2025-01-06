"use client";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  const decrement = () => {
    setCount(count => count - 1);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <p>Counter: {count}</p>

      <div className="flex gap-4">
        <button className="p-4 bg-green-400 rounded-lg" onClick={increment}>
          +
        </button>
        <button className="p-4 bg-red-400 rounded-lg" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
