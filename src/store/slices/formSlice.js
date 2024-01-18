import {createSlice} from '@reduxjs/toolkit';
import {addPlant} from './plantsSlice';

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
    },
    extraReducers(builder) {
        builder.addCase(addPlant, (state, action)=>{
            // Use this action that we have to reset things
            state.genus = ''
            state.species = ''
        })
    }
});

export const {changeGenus, changeSpecies, changeImage} = formSlice.actions;
export const formReducer = formSlice.reducer;