import { useContextSelector } from 'use-context-selector';
import { CountContext } from '../contexts/CountContext';
import { useEffect } from 'react';

export default function Theme() {
    const theme = useContextSelector(CountContext, v => v.state.theme);
    const dispatch = useContextSelector(CountContext, v => v.dispatch);

    useEffect(()=> {
        console.log("Theme got re-rendered.");
    },[theme])
    return (
        <>
            <h1>{theme}</h1>
            <button onClick={() => dispatch({type: "toggleTheme"})}>Toggle Theme</button>
        </>
    )
}
