import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import searchPlants from './api';
import PlantList from './components/PlantList';
import PlantCreate from './components/PlantCreate';
import axios from 'axios';

function App() {
    const [plants, setPlants] = useState([]);

    const handleSubmit = async (term) => {
        // Need to get this list of plants into the SearchList component
        const result = await searchPlants(term);
        setPlants(result);
    }

    const fetchPlants = async () =>{
        const response = await axios.get(' http://localhost:3001/plants');
        console.log(response.data)
        setPlants(response.data);
    }

    useEffect(()=>{
        // Called when first render to screen
        fetchPlants();
    }, []);

    const editPlantById = async (id, scientificName) => {
        const response = await axios.put(`http://localhost:3001/plants/${id}`);

        let updatedPlants = plants.map((plant)=>{
            if(plant.id === id) {
                // Update plant
                return {...plant, ...response.data }
            }
            // If not plant
            return plant
        });

        setPlants(updatedPlants);
    }

    const deletePlantById = async (id) => {
        await axios.delete(`http://localhost:3001/plants/${id}`);

        const updatedPlants = plants.filter((plant) => {
            return id !== plant.id;
        });

        setPlants(updatedPlants);
    }

    const createPlant = async (scientificName, commonName) => {
        const response = await axios.post(' http://localhost:3001/plants', {
            scientificName, commonName
        })

        const updatedPlants = [...plants, response.data]
        setPlants(updatedPlants);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            {/* Pass plants down */}
            <PlantList onEdit={editPlantById} onDelete={deletePlantById} plants={plants}/>
            <h1>Make Plant</h1>
            {/* Pass createPlant method to child, then it will call this method within the child to pass the input data back up to here in the parent */}
            <PlantCreate onCreate={createPlant}/>
        </div>
    )
}

export default App;