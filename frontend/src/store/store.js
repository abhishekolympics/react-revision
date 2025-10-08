// import { create } from "zustand";
// import { devtools } from "zustand/middleware";

// const useStore = create(
//   devtools((set) => ({
//     count: 0,
//     theme: "light",
//     username: "",
//     setUsername: (name) => set({ username: name }),
//     increment: () => set((s) => ({ count: s.count + 1 })),
//     decrement: () => set((s) => ({ count: s.count - 1 })),
//     toggleTheme: () =>
//       set((s) => ({ theme: s.theme === "light" ? "dark" : "light" })),
//     reset: () => set((s) => ({ count: 0, theme: "light" })),
//   }))
// );

// export default useStore;


// frontend/src/store.js
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useStore = create(
  devtools((set) => ({
    // state
    count: 0,
    theme: "light",
    username: "guest",

    // actions (with optional action labels for DevTools)
    setUsername: (name) => set(() => ({ username: name }), false, "SET_USERNAME"),
    increment: () => set((s) => ({ count: s.count + 1 }), false, "INCREMENT"),
    decrement: () => set((s) => ({ count: s.count - 1 }), false, "DECREMENT"),
    toggleTheme: () => set((s) => ({ theme: s.theme === "light" ? "dark" : "light" }), false, "TOGGLE_THEME"),
    reset: () => set(() => ({ count: 0, theme: "light" }), false, "RESET"),
  }))
);

export default useStore;
