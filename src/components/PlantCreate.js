import { useState } from "react";

function PlantCreate({ onCreate }) {
    const [scientificName, setScientificName] = useState('');
    const [commonName, setCommonName] = useState('');

    const handleChange = (event) => {
        setScientificName(event.target.value);
    }

    const handleNameChange = (event) => {
        setCommonName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form submission to browser

        onCreate(scientificName, commonName);
        setScientificName(''); // Clear input after submit
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input className="border rounded-md border-sky-900" value={scientificName} onChange={handleChange} />
            <input className="border rounded-md border-sky-900" value={commonName} onChange={handleNameChange} />
            <button className="border rounded-md border-sky-900">Create Plant</button>
        </form>
    </div>
}

export default PlantCreate;