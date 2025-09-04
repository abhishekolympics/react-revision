import { useContext, useEffect } from "react";
import { CountContext } from "../contexts/CountContext";

export default function Counter() {

    const { state, dispatch } = useContext(CountContext);

    // function handleCounter() {
    //     setCount(count + 1);
    // }
    
    useEffect(() => {
        console.log("re-rendered ");
    },[state.count, state.theme])
    
    return (
        <>
             <h1>Counter App</h1>
            <h2>{state.count}</h2>
            <h2>{state.theme}</h2>

            <button onClick={() => dispatch({type: 'increment'})}>Increase counter</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrease counter</button>
            <button onClick={() => dispatch({type: 'Light'})}>Light Theme</button>
            <button onClick={() => dispatch({type: 'Dark'})}>Dark Theme</button>
            <button onClick={() => dispatch({type: 'reset'})}>Dark Theme</button>

            {/* <button onClick={(() => setCount(count + 1))}>Increase counter</button> */}
            {/* <button onClick={setCount(count + 1)}>Increase counter</button> */}
        </>
    )
}