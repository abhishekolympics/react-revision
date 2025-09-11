// using useReducer and useContext together

// import React, { useMemo, useReducer } from 'react'
// import './App.css'
// import { CountContext } from './contexts/CountContext'
// import Counter from './components/Counter'
// import Theme from './components/Theme';
// import Reset from './components/Reset';

// function App() {
//   const initialState = { count: 0, theme: 'dark' };

//   function reducer(state, action) {
//     switch(action.type)
//     {
//       case 'increment':
//         return {...state, count:state.count + 1};
//       case 'decrement':
//         return {...state, count:state.count - 1};
//       case "toggleTheme":
//       return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
//       case "Reset":
//       return { ...initialState };
//       default: return state;
//     }
//   }

//   const [ state, dispatch ] = useReducer(reducer, initialState );

//   const value = useMemo(() => ({ state, dispatch}),[state]);
//   return (
//     <CountContext.Provider value={value}>
//      <Counter/>
//      <Theme/>
//      <Reset/>
//     </CountContext.Provider>
//   )
// }
// export default App


// using zustand in-place of useReducer and useContext


import './App.css'
import Counter from './components/Counter'
import Theme from './components/Theme';
import Reset from './components/Reset';

export default function App() {
  return (
    <>
      <Counter/>
      <Theme/>
      <Reset/>
    </>
  )
}