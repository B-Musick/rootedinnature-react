import {useSelector, useDispatch} from 'react-redux';
import { removePlant } from '../store';

import Button from './Button';

function PlantCollectionList() {
    const dispatch = useDispatch();

    const {plants, species} = useSelector(({ form, plants: {data, searchTerm }})=>{
        // This is where data will be filtered from the PlantSearch
        const filteredPlants =  data.filter((plant)=>{
            return plant.species.toLowerCase().includes(searchTerm.toLowerCase());
        });

        // Return object with list and the form search
        return {
            plants: filteredPlants,
            species: form.species
        }
    })

    const handlePlantDelete = (plant) => {
        dispatch(removePlant(plant.id));
    }

    const renderedPlants = plants.map((plant)=>{
        // Decide if plant should be bold here, so need state.form.species
        const bold = species && plant.species.toLowerCase().includes(species.toLowerCase());

        return (
            <div key={plant.id} className={`${bold && 'font-bold'}`}>
                <p>{plant.species}</p>
                <Button danger onClick={()=>handlePlantDelete(plant)}>Delete</Button>
            </div>
        )
    });

    console.log(plants);

    return (
        <div>
            <div>PlantCollectionList</div>
            <div>{renderedPlants}</div>
        </div>

    )
}

export default PlantCollectionList;