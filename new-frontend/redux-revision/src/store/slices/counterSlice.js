import { createSlice } from '@reduxjs/toolkit';

const initialState= { value: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
            increment(state) {
                // debugger;
            console.log('increment reducer called — before:', state.value);
            state.value += 4;
            console.log('increment reducer finished — after:', state.value);
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

export const { increment, decrement, addBy, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;