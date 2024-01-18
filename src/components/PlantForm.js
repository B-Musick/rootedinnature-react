// useSelector - hook to access state
import { useDispatch, useSelector } from 'react-redux';
import { changeGenus, changeSpecies, addPlant } from '../store'; // action creator giving an action object 
import Button from '../components/Button';

function PlantForm() {
    const dispatch = useDispatch();

    const {genus, species} = useSelector((state)=>{
        return {
            genus: state.form.genus,
            species: state.form.species
        }
    })
    
    const handleGenusChange = (event) => {
        dispatch(changeGenus(event.target.value));
    };

    const handleSpeciesChange = (event) => {
        dispatch(changeSpecies(event.target.value));
    }

    const handleSubmit = (event) => {
        // Need to call action creator addPlant and dispatch action from it
        event.preventDefault();

        dispatch(addPlant({genus, species}));
    }
    return (
        <div className="plant-form panel">
            <h4>Add Plant</h4>
             <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Genus</label>
                        <input 
                            className="input is-expanded"
                            // Access state changed and re render
                            value={genus}
                            // Action to tell need to update state
                            onChange={handleGenusChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Species</label>
                        <input
                            className="input is-expanded"
                            // Access state changed and re render
                            value={species}
                            // Action to tell need to update state
                            onChange={handleSpeciesChange}
                        />
                    </div>
                </div>
                <div>
                    <Button primary>Submit</Button>
                </div>
             </form>
        </div>
    )
}

export default PlantForm;