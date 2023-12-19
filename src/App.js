import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchPlants from './api';
import PlantList from './components/PlantList';

function App() {
    const [plants, setPlants] = useState([]);

    const handleSubmit = async (term) => {
        // Need to get this list of plants into the SearchList component
        const result = await searchPlants(term);
        setPlants(result);
        console.log(result);
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <PlantList items={plants}/>
        </div>
    )
}

export default App;