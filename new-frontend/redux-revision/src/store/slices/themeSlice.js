import { createSlice } from 'reduxjs/toolkit';

const initialValue = { mode: 'dark' };

const themeSlice = createSlice({
    name: 'theme',
    initialValue,
    reducers: {
        toggleTheme(state) {
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
        },
        setTheme(state,action) {
            state.mode = action.payload;
        },
        resetTheme(state) {
            state.mode = 'dark'
        },
    },
});

export const { toggleTheme, setTheme, resetTheme } = themeSlice.action;
export default themeSlice.reducer;