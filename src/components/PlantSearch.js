import { useSelector, useDispatch } from 'react-redux';
import { changeSearchTerm } from '../store'; // Action creator

function PlantSearch() {
    const dispatch = useDispatch();

    const handleSearchTermChange = (event) => {
        // Change search term in the store to that of the input
        // use the action creator and pass in the event target
        dispatch(changeSearchTerm(event.target.value));
    }

    const searchTerm = useSelector((state) => {
        // Update the searchTerm shown in the input using state
        return state.searchTerm
    })

    return (
        <div>
            <div>PlantSearch</div>
            <div>
                <label>Search</label>
                <input 
                    className='input' 
                    value={searchTerm} 
                    onChange={handleSearchTermChange}
                />
            </div>
        </div>
    )
}

export default PlantSearch;