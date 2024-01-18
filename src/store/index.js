import { configureStore } from '@reduxjs/toolkit';
import { plantsReducer, addPlant, removePlant, changeSearchTerm } from './slices/plantsSlice';
import { formReducer, changeGenus, changeSpecies, changeImage } from './slices/formSlice';
import { keyReducer, addKey, removeKey } from './slices/keysSlice';
import { usersReducer } from './slices/usersSlice';

import { reset } from './actions';

import { plantsApi } from './apis/plantApi';

const store = configureStore({
    reducer: {
        users: usersReducer,
        // plants: plantsReducer,
        keys: keyReducer, 
        form: formReducer,
        [plantsApi.reducerPath]: plantsApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(plantsApi.middleware)
});

export { store, reset, addPlant, removePlant, changeSearchTerm, addKey, removeKey };
export { changeGenus, changeSpecies, changeImage }