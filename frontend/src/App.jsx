import { useState } from 'react'
import './App.css'
import { CountContext } from './contexts/CountContext'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{ count, setCount }}>
     <Counter/>
    </CountContext.Provider>
  )
}

export default App
