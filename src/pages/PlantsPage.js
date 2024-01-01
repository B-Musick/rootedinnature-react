import usePlantsContext from '../hooks/use-plants-context';
import { useEffect } from 'react';
import PlantList from '../components/PlantList';

function PlantsPage(){
    const { fetchPlants } = usePlantsContext();

    useEffect(() => {
        // Called when first render to screen
        fetchPlants();
    }, []);

    return (
        <div>
            <div>Plants</div>
            <PlantList />

        </div>

    )
}

export default PlantsPage;