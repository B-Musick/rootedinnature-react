import { useState } from "react";
import usePlantsContext from '../hooks/use-plants-context';

function PlantCreate() {
    const [scientificName, setScientificName] = useState('');
    const [commonName, setCommonName] = useState('');
    const {createPlant} = usePlantsContext();

    const handleScientificNameChange = (event) => {
        setScientificName(event.target.value);
    }

    const handleCommonNameChange = (event) => {
        setCommonName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission to browser

        createPlant(scientificName, commonName);
        setScientificName(''); // Clear input after submit
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input className="border rounded-md border-sky-900" value={scientificName} onChange={handleScientificNameChange} />
            <input className="border rounded-md border-sky-900" value={commonName} onChange={handleCommonNameChange} />
            <button className="border rounded-md border-sky-900">Create Plant</button>
        </form>
    </div>
}

export default PlantCreate;