import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './slices/CustomerSlice';

const store = configureStore({
    reducer: {
        customer: customerSlice,
    }
});

export default store;