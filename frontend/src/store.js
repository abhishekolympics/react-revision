import { create } from 'zustand'

const useStore = create((set) => ({
    count : 0,
    theme : 'light',
    increment : () => set((s) => ({ count: s.count + 1})),
    decrement : () => set((s) => ({ count: s.count - 1})),
    toggleTheme : () => set((s) => ({ theme: s.theme === 'light' ? 'dark': 'light'})),
    reset : () => set((s) => ({ count : 0, theme : 'light' })),
}));

export default useStore;