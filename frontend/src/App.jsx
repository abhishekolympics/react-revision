import { useReducer } from 'react'
import './App.css'
import { CountContext } from './contexts/CountContext'
import Counter from './components/Counter'

function App() {
  // const [count, setCount] = useState(0)
  const initialState = { count: 0, theme: 'dark' };

  function reducer(state, action) {
    switch(action.type)
    {
      case 'increment':
        return {...state, count:state.count + 1};
      case 'decrement':
        return {...state, count:state.count - 1};
      case 'Dark':
        return { ...state, theme: 'Dark'}
      case 'Light':
        return { ...state, theme: 'Light'}
      case 'reset': 
        return { ...state, theme: 'Dark', count: 0 }
      default: return state;
    }
  }

  const [ state, dispatch ] = useReducer(reducer, initialState );
  return (
    <CountContext.Provider value={{ state, dispatch }}>
     <Counter/>
    </CountContext.Provider>
  )
}

export default App
