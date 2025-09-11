// using useContext and useReducer

// import { useContextSelector } from 'use-context-selector';
// import { useEffect  } from 'react';
// import { CountContext } from '../contexts/CountContext';

// export default function Reset() {
    
//     const dispatch = useContextSelector(CountContext, v => v.dispatch);

//     return (
//         <>
//             <h1>RESET</h1>
//             <button onClick={() => dispatch({type: 'Reset'})}> RESET </button>
//         </>
//     );
// }


//using zustand

import { useEffect } from "react";
import useStore from '../store';

export default function Reset() {

    const reset = useStore((s) => s.reset);

    useEffect( ()=>{
        console.log('reset is re-rendered');
    }, [] );
    return (
        <button onClick={reset}>
            RESET
        </button>
    )
}