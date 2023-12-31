import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import searchPlants from './api';
import PlantList from './components/PlantList';
import PlantCreate from './components/PlantCreate';
import PlantShow from './components/PlantShow';
import usePlantsContext from './hooks/use-plants-context';
import Dropdown from './components/Dropdown';
// import Link from './components/Link';
import TopNavbar from './components/TopNavBar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import SearchPage from './pages/SearchPage';

function App() {
    const { fetchPlants } = usePlantsContext();
    const [searchResult, setSearchResult] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        // Called when first render to screen
        fetchPlants();
    }, []);

    const handleSubmit = async (term) => {
        // Need to get this list of plants into the SearchList component
        const result = await searchPlants(term);
        
        setSearchResult(result);
    }

    const renderedPlants = searchResult.map((plant) => {
        // Keys should be unique
        plant = {...plant, scientificName: plant.scientific_name, commonName: plant.common_name}
        return <PlantShow key={plant.id} plant={plant} />
    })
    
    const dropdownOptions = [
        {
            id: "1",
            label: "Scientific Name",
            value: "scientific"
        },
        {
            id: "2",
            label: "Common Name",
            value: "common"
        }, 
        {
            id: "3",
            label: "Family",
            value: "family"
        },   
    ]

    const handleSelect=(option)=>{
        setSelected(option)
    }

    return (
        <div>
            <TopNavbar />
            <div>
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/search">
                    <SearchPage />
                </Route>
            </div>

            <Dropdown value={selected} onChange={handleSelect} options={dropdownOptions}/>
            {renderedPlants}
            <SearchBar onSubmit={handleSubmit} />
            {/* Pass plants down */}
            <PlantList />
            <h1>Make Plant</h1>
            {/* Pass createPlant method to child, then it will call this method within the child to pass the input data back up to here in the parent */}
            <PlantCreate/>
        </div>
    )
}

export default App;