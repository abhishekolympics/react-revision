import { resetCounter  } from "../slices/counterSlice"; 

export const threshold = (limit = 10 ) => (storeAPI) => (next) => (action) => {

    const result = next(action);

    if(action.type === 'counter/increment' || action.type === 'counter/addBy' || action.type === 'counter/decrement') {
        const current = storeAPI.getState().counter.value;
        if(current >= limit || current <= -limit) {
            storeAPI.dispatch(resetCounter());
        }
    }

    return result;
};