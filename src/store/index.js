import { configureStore, createSlice, createAction } from '@reduxjs/toolkit';
import { plantsReducer, addPlant, removePlant } from './slices/plantsSlice';
import { keyReducer, addKey, removeKey } from './slices/keysSlice';
import { reset } from './actions';

const store = configureStore({
    reducer: {
        plants: plantsReducer,
        keys: keyReducer
    }
});

export { store, reset, addPlant, removePlant, addKey, removeKey };