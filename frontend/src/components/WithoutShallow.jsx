// import { useEffect } from 'react';
// import useStore from '../store';

// export default function WithoutShallow() {

//     const { count, theme } = useStore();
//     const { increment, decrement, toggleTheme } = useStore();

//     return (
//         <>
//             <h1> Without Shallow </h1>
//             <h1>{count}</h1>
//             <h1>{theme}</h1>
//             <button onClick={increment}> Increment </button>
//             <button onClick={decrement}> Decrement </button>
//             <button onClick={toggleTheme}> Toggle Theme </button>

//         </>  
//     );
// }


// frontend/src/components/WithoutShallow.jsx
import React, { useRef, useEffect } from "react";
import useStore from "../store";

export default function WithoutShallow() {
  // This selects the whole object implicitly (no selector) — but we deliberately
  // show a "bad" pattern: using useStore() without selector returns the full store object.
  // We'll instead use two separate calls below so the component subscribes to many changes.
  const { count, theme } = useStore(); // returns full store then destructures -> causes re-renders
  const { increment, decrement, toggleTheme } = useStore();

  // render counter to visibly see re-renders
  const renders = useRef(0);
  useEffect(() => {
    renders.current += 1;
  });

  return (
    <div>
      <h3>Without shallow (naïve selection)</h3>
      <div>Renders: {renders.current}</div>
      <div>
        <strong>count:</strong> {count}
      </div>
      <div>
        <strong>theme:</strong> {theme}
      </div>

      <div style={{ marginTop: 8 }}>
        <button onClick={increment}>+1</button>{" "}
        <button onClick={decrement}>-1</button>{" "}
        <button onClick={toggleTheme}>toggle theme</button>
      </div>

      <p style={{ marginTop: 6, color: "#555" }}>
        This component uses a broad selection pattern that will re-render even when unrelated pieces of state (like <code>username</code>) change.
      </p>
    </div>
  );
}
