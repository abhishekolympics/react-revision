//using useContext and useReducer

// import { useContextSelector } from 'use-context-selector';
// import { CountContext } from '../contexts/CountContext';
// import { useEffect } from 'react';

// export default function Theme() {
//     const theme = useContextSelector(CountContext, v => v.state.theme);
//     const dispatch = useContextSelector(CountContext, v => v.dispatch);

//     useEffect(()=> {
//         console.log("Theme got re-rendered.");
//     },[theme])
//     return (
//         <>
//             <h1>{theme}</h1>
//             <button onClick={() => dispatch({type: "toggleTheme"})}>Toggle Theme</button>
//         </>
//     )
// }


//using zustand

// import { useEffect  } from "react";
// import useStore from '../store';

// export default function Theme() {
//     const theme = useStore((s) => s.theme );
//     const toggle = useStore((s) => s.toggleTheme );

//     useEffect(() => {
//         console.log("Theme re-rendered");
//     }, [theme])

//     return (
//         <>
//             <h1>
//                 {theme}
//             </h1>
//             <button onClick={toggle}>
//                 Toggle Theme
//             </button>
//         </>
//     )
// }



//using jotai
import { useEffect  } from "react";
import { themeAtom } from '../store/atoms';
import { useAtom } from 'jotai';

export default function Theme() {

    const [theme, setTheme] = useAtom(themeAtom);

    useEffect(() => {
        console.log("Theme re-rendered");
    }, [theme])

    return (
        <>
            <h1>
                {theme}
            </h1>
            <button onClick={() => setTheme((theme) => theme!=='light'?'light':'dark')}>
                Toggle Theme
            </button>
        </>
    )
}