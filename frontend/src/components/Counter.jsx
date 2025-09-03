import { useContext, useEffect } from "react";
import { CountContext } from "../contexts/CountContext";

export default function counter() {

    const { count, setCount } = useContext(CountContext);

    function handleCounter() {
        setCount(count + 1);
    }
    
    useEffect(() => {
        console.log("re-rendered ", count);
    },[count])
    
    return (
        <>
             <h1>Counter App</h1>
            <h2>{count}</h2>

            <button onClick={handleCounter}>Increase counter</button>
            {/* <button onClick={(() => setCount(count + 1))}>Increase counter</button> */}
            {/* <button onClick={setCount(count + 1)}>Increase counter</button> */}
        </>
    )
}