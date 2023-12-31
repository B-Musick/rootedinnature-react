import { useState } from "react";
import usePlantsContext from "../hooks/use-plants-context";
import Button from "./Button";
import { BsFillPencilFill } from "react-icons/bs";

function PlantEdit({plant, onSubmit}) {
    const [scientificName, setScientificName] = useState(plant.scientificName);
    const {editPlantById} = usePlantsContext();

    const handleChange = (event) => {
        setScientificName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit();
        editPlantById(plant.id, scientificName)
    }

    return <form className="border rounded-md border-sky-900" onSubmit={handleSubmit}>
            <label>Scientific Name</label>
            <input className="border rounded-md border-sky-900" value={scientificName} onChange={handleChange}></input>
            <Button primary rounded><BsFillPencilFill />Save</Button>
        </form>
}

export default PlantEdit;