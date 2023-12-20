import PlantShow from './PlantShow';

function PlantList({plants, onDelete, onEdit}) {
    const renderedPlants = plants.map((plant)=>{
        // Keys should be unique
        return <PlantShow onEdit={onEdit} onDelete={onDelete} key={plant.id} plant={plant} />
    })

    return <div className="flex flex-wrap">{renderedPlants}</div>
}

export default PlantList;