import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import searchPlants from '../api';
import PlantShow from '../components/PlantShow';

function SearchPage() {
    const [searchResult, setSearchResult] = useState([]);

    const handleSubmit = async (term) => {
        // Need to get this list of plants into the SearchList component
        const result = await searchPlants(term);

        setSearchResult(result);
    }

    const renderedPlants = searchResult.map((plant) => {
        // Keys should be unique
        plant = { ...plant, scientificName: plant.scientific_name, commonName: plant.common_name }
        return <PlantShow key={plant.id} plant={plant} />
    })

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            {renderedPlants}
        </div>
    )
}

export default SearchPage;