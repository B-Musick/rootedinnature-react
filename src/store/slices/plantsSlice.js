import { createSlice, nanoid } from '@reduxjs/toolkit';
import { reset } from '../actions';

const plantSlice = createSlice({
    name: 'plant',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addPlant(state, action) {
            // Want to modify plants above and mutate
            // Assume when receive action.payload it will have a name and cost and id
            state.data.push({
                genus: action.payload.genus,
                species: action.payload.species,
                // Redux toolkit gives us extra thing for id
                id: nanoid()
            });
            // state.push(action.payload);
        },
        removePlant(state, action) {
            // Assume action is a string and is species
            // 2. want action to be the id of the plant we want to remove
            const updated = state.data.filter((plant)=>{
                return plant.id !== action.payload;
            });
            state.data = updated;
            // const index = state.indexOf(action.payload);
            // state.splice(index, 1);
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            // reducer function to run
            return [];
        })
    }
});

export const { addPlant, removePlant, changeSearchTerm } = plantSlice.actions;
// export default plantSlice.reducer; // Could do this 
export const plantsReducer = plantSlice.reducer;