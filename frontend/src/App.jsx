import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleCounter() {

    setCount(count + 1);
  }

  function useEffectFunc() {
    console.log("a new render happened due state updation", count);
  }

  useEffect(useEffectFunc,[count])
  // useEffect(() => { 
  //   console.log("a new render happened due state updation", count);
  // },[count])

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

export default App
