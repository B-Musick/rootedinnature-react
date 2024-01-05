import {createSlice} from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        genus: '',
        species: '',
        image: ''
    },
    reducers: {
        changeGenus(state, action) {
            state.genus = action.payload;
        },
        changeSpecies(state, action){
            state.species = action.payload;
        },
        changeImage(state, action) {
            state.image = action.payload;
        }
    }
});

export const {changeGenus, changeSpecies, changeImage} = formSlice.actions;
export const formReducer = formSlice.reducer;