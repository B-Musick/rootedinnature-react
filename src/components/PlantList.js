import PlantShow from './PlantShow';
import usePlantsContext from '../hooks/use-plants-context';

function PlantList() {
    const { plants } = usePlantsContext();

    const renderedPlants = plants.map((plant)=>{
        // Keys should be unique
        return <PlantShow key={plant.id} plant={plant} />
    })

    return <div className="flex flex-wrap">
        {renderedPlants}</div>
}

export default PlantList;