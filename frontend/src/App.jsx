// // using useReducer and useContext together

// // import React, { useMemo, useReducer } from 'react'
// // import './App.css'
// // import { CountContext } from './contexts/CountContext'
// // import Counter from './components/Counter'
// // import Theme from './components/Theme';
// // import Reset from './components/Reset';

// // function App() {
// //   const initialState = { count: 0, theme: 'dark' };

// //   function reducer(state, action) {
// //     switch(action.type)
// //     {
// //       case 'increment':
// //         return {...state, count:state.count + 1};
// //       case 'decrement':
// //         return {...state, count:state.count - 1};
// //       case "toggleTheme":
// //       return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
// //       case "Reset":
// //       return { ...initialState };
// //       default: return state;
// //     }
// //   }

// //   const [ state, dispatch ] = useReducer(reducer, initialState );

// //   const value = useMemo(() => ({ state, dispatch}),[state]);
// //   return (
// //     <CountContext.Provider value={value}>
// //      <Counter/>
// //      <Theme/>
// //      <Reset/>
// //     </CountContext.Provider>
// //   )
// // }
// // export default App


// // using zustand in-place of useReducer and useContext


// import './App.css'
// import Counter from './components/Counter'
// import Theme from './components/Theme';
// import Reset from './components/Reset';
// import CounterTheme from './components/WithoutShallow';
// import WithoutShallow from './components/WithoutShallow';
// import WithShallow from './components/WithShallow';
// import UpdateUser from './components/UpdateUser';

// export default function App() {
//   return (
//     <>
//       <WithoutShallow/>
//       <br/>
//       <br/>
//       <br/>
      
//       <UpdateUser/>

//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <WithShallow/>
//       {/* <Counter/>
//       <Theme/>
//       <Reset/> */}
//     </>
//   )
// }



//using zustand
// frontend/src/App.jsx
// import "./App.css";
// import WithoutShallow from "./components/WithoutShallow";
// import WithShallow from "./components/WithShallow";
// import UpdateUser from "./components/UpdateUser";

// export default function App() {
//   return (
//     <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
//       <h2>Zustand: shallow vs no-shallow demo</h2>

//       <section style={{ border: "1px dashed #999", padding: 12, marginBottom: 20 }}>
//         <WithoutShallow />
//       </section>

//       <section style={{ border: "1px dashed #999", padding: 12, marginBottom: 20 }}>
//         <UpdateUser />
//       </section>

//       <section style={{ border: "1px dashed #999", padding: 12 }}>
//         <WithShallow />
//       </section>
//     </div>
//   );
// }











// using jotai

import "./App.css";
import Counter from './components/Counter';
import Theme from './components/Theme';
import Reset from './components/Reset';

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
      <h2>Jotai: using Atoms</h2>

      <section style={{ border: "1px dashed #999", padding: 12, marginBottom: 20 }}>
        <Counter />
      </section>

      <section style={{ border: "1px dashed #999", padding: 12, marginBottom: 20 }}>
        <Theme />
      </section>

      <section style={{ border: "1px dashed #999", padding: 12 }}>
        <Reset />
      </section>
    </div>
  );
}
