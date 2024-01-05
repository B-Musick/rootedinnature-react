import { createSlice } from '@reduxjs/toolkit';
import { reset } from '../actions';

const keySlice = createSlice({
    name: 'key',
    initialState: [],
    reducers: {
        addKey(state, action) {
            state.push(action.payload);
        },
        removeKey(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            // reducer function to run
            return [];
        })
    }
})

export const { addKey, removeKey } = keySlice.actions;
export const keyReducer = keySlice.reducer;