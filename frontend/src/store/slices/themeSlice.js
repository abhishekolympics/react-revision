import { createSlice } from '@reduxjs/toolkit';

const initialState = { mode: 'dark' };

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setTheme(state, action) {
            state.mode = action.payload;
        },
        resetTheme(state) {
            state.mode = 'dark';
        },
    },
});

export const { toggleTheme, setTheme, resetTheme } = themeSlice.actions;
export default themeSlice.reducer;