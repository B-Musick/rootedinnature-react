import {useSelector} from 'react-redux';

// Could use this type of class to get total cost, etc.
function PlantValue() {
    const totalPlants = useSelector(({plants:{data, searchTerm}})=>{
        const filteredPlants = data.filter((plant)=>{
            return plant.species.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return filteredPlants.length;
    })
    return (
        <div>
            <div>Statistics</div>
            <div>Plant Count: {totalPlants}</div>
        </div>
    )
}

export default PlantValue;