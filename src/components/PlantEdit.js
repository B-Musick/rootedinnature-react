import { useState } from "react";

function PlantEdit({plant, onSubmit}) {
    const [scientificName, setScientificName] = useState(plant.scientific_name);

    const handleChange = (event) => {
        setScientificName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(plant.id, scientificName);
    }

    return <form className="border rounded-md border-sky-900" onSubmit={handleSubmit}>
            <label>Scientific Name</label>
            <input className="border rounded-md border-sky-900" value={scientificName} onChange={handleChange}></input>
            <button>Save</button>
        </form>
}

export default PlantEdit;