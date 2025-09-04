import { useContextSelector } from 'use-context-selector';
import { useEffect  } from 'react';
import { CountContext } from '../contexts/CountContext';

export default function Reset() {
    
    const dispatch = useContextSelector(CountContext, v => v.dispatch);

    return (
        <>
            <h1>RESET</h1>
            <button onClick={() => dispatch({type: 'Reset'})}> RESET </button>
        </>
    );
}