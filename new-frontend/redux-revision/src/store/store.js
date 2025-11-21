import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import themeReducer from './slices/themeSlice';
import { logger } from './middleware/logger';
import { threshold } from './middleware/threshold';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        theme: themeReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, threshold(10)),
});

export default store;