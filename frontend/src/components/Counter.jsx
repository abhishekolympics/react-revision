// using useContext and useReducer

// import { useEffect } from "react";
// import { CountContext } from "../contexts/CountContext";
// import { useContextSelector } from "use-context-selector";

// export default function Counter() {

//     const count = useContextSelector(CountContext, v => v.state.count);
//     const dispatch = useContextSelector(CountContext, v => v.dispatch);
    
//     useEffect(() => {
//         console.log("counter got re-rendered ");
//     },[count])
    
//     return (
//         <>
//              <h1>Counter App</h1>
//             <h2>{count}</h2>

//             <button onClick={() => dispatch({type: 'increment'})}>Increase counter</button>
//             <button onClick={() => dispatch({type: 'decrement'})}>Decrease counter</button>
//         </>
//     )
// }


//using zustand

import { useEffect } from "react";
import useStore from '../store';

export default function Counter() {
    const count = useStore((s) => s.count);
    const increment = useStore((s) => s.increment);
    const decrement = useStore((s) => s.decrement);

    useEffect(() => {
        console.log("counter re-rendered");
    },[count])
    
    return (
        <>
            <h1>
                {count}
            </h1>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
        </>
    )
}