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

// import { useEffect } from "react";
// import useStore from '../store';

// export default function Reset() {

//     const reset = useStore((s) => s.reset);

//     useEffect( ()=>{
//         console.log('reset is re-rendered');
//     }, [] );
//     return (
//         <button onClick={reset}>
//             RESET
//         </button>
//     )
// }





//using jotai


// import { useEffect } from "react";
// import { useAtom } from 'jotai';
// import { countAtom, themeAtom } from '../store/atoms';

// export default function Reset() {

//     const [theme, setTheme] = useAtom(themeAtom);
//     const [count, setCount] = useAtom(countAtom);

//     useEffect( ()=>{
//         console.log('reset is re-rendered');
//     }, [] );

//     function reset() {
//         setTheme('light');
//         setCount(0);
//     }

//     return (
//         <button onClick={reset}>
//             RESET
//         </button>
//     )
// }



//revising redux

import { useDispatch } from 'react-redux';
import { resetCounter } from '../store/slices/counterSlice';
import { resetTheme } from '../store/slices/themeSlice';

export default function Reset() {
    const dispatch = useDispatch();

    function handleReset() {
        dispatch(resetCounter());
        dispatch(resetTheme());
    }

    return <button onClick={handleReset}>RESET</button>;
}