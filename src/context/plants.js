import { useState, createContext } from "react";
import axios from "axios";

const PlantsContext = createContext();

function PlantProvider({children}) {
    const [plants, setPlants] = useState([]);

    const editPlantById = async (id, scientificName) => {
        const response = await axios.put(`http://localhost:3001/plants/${id}`, {
            scientificName
        });

        let updatedPlants = plants.map((plant) => {
            if (plant.id === id) {
                // Update plant
                return { ...plant, ...response.data }
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

    const fetchPlants = async () => {
        const response = await axios.get(' http://localhost:3001/plants');
        setPlants(response.data);
    }

    const plantsObject = {
        plants, editPlantById, deletePlantById, createPlant, fetchPlants
    }

    return <PlantsContext.Provider value={plantsObject}>
        {children}
    </PlantsContext.Provider>
}

export {PlantProvider};
export default PlantsContext;