// import { shallow } from 'zustand/shallow';
// import useStore from '../store';

// export default function WithShallow() {

//     const { count, theme } = useStore(
//         (state) => ({ count: state.count, theme: state.theme }),
//         shallow
//     );
//     // const { increment, decrement, toggleTheme } = useStore();

//     return (
//         <>
//             <h1> With Shallow </h1>
//             <h1>{count}</h1>
//             <h1>{theme}</h1>
//             {/* <button onClick={increment}> Increment </button>
//             <button onClick={decrement}> Decrement </button>
//             <button onClick={toggleTheme}> Toggle Theme </button> */}

//         </>  
//     );
// }

// WithShallow.jsx (preferred fix)
import React, { useRef, useEffect } from "react";
import useStore from "../store";

export default function WithShallow() {
  // select primitives separately — no object created
  const count = useStore((s) => s.count);
  const theme = useStore((s) => s.theme);

  const increment = useStore((s) => s.increment);
  const decrement = useStore((s) => s.decrement);
  const toggleTheme = useStore((s) => s.toggleTheme);

  const renders = useRef(0);
  useEffect(() => {
    renders.current += 1;
  });

  return (
    <div>
      <h3>With separate primitive selectors (safe)</h3>
      <div>Renders: {renders.current}</div>
      <div><strong>count:</strong> {count}</div>
      <div><strong>theme:</strong> {theme}</div>

      <div style={{ marginTop: 8 }}>
        <button onClick={increment}>+1</button>{" "}
        <button onClick={decrement}>-1</button>{" "}
        <button onClick={toggleTheme}>toggle theme</button>
      </div>
    </div>
  );
}
