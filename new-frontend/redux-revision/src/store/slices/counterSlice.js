import { createSlice } from 'reduxjs/toolkit';

const initialValue = { value: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialValue,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        addBy(state,action) {
            state.value += action.payload;
        },
        resetCounter(state) {
            state.value = 0;
        },
    },
});

export const { increment, decrement, addBy, resetCounter } = counterSlice.action;
export default counterSlice.reducer;