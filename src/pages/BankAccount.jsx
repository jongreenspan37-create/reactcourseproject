import { useState } from "react";
import Card from "../components/Card.jsx";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Card title="Counter" description="useState in action">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-3 py-1 bg-slate-700 rounded"
        >
          −
        </button>
        <span className="text-xl font-mono">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 bg-slate-700 rounded"
        >
          +
        </button>
      </div>
    </Card>
  );
}
