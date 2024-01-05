import { useDispatch, useSelector } from 'react-redux';
import { addPlant, removePlant, reset } from '../store';
import Button from '../components/Button';

function PlantCollection(){
    const dispatch = useDispatch();

    const plantCollection = useSelector((state)=>{
        return state.plants;
    });

    const plants = [
        {
            "species": "Poplar", 
            "genus": "Tremuloides"
        },
        {
            "species": "Betula",
            "genus": "chocolates"
        }
    ]

    const addPlantToCollection = (plant) =>{
        // Pass plant payload so the reducer knows what to add to list
        dispatch(addPlant(plant));
    }

    const removeFromCollection = (plant) => {
        dispatch(removePlant(plant));
    }

    const handleResetClick = () =>{
        dispatch(reset());
    }

    const renderedPlants = plants.map((plant)=>{
        return (<div>
            <h3>{plant.species} {plant.genus}</h3>
            <button 
                onClick={()=>addPlantToCollection(plant)}
            >
                Add
            </button>
        </div>)
    })

    const renderedCollection = plantCollection.map((plant) => {
        return (<div>
            <h3>{plant.species} {plant.genus}</h3>
            <button
                onClick={() => removeFromCollection(plant)}
            >
                Remove
            </button>
        </div>)
    })

    return (
        <div>
            <h1>Plants</h1>
            {renderedPlants}

            <h2>Collection</h2>
            <Button warning rounded onClick={handleResetClick}>Reset Collection</Button>
            {renderedCollection}
        </div>
    )
}

export default PlantCollection;