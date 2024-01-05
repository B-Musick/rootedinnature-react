import { useDispatch, useSelector } from 'react-redux';
import { addKey, removeKey } from '../store';
import Button from '../components/Button';

function PlantKeyPage () {
    // Use context system to reach up to the provider at top of component heirarchy to get access to dispatch from redux store
    const dispatch = useDispatch();

    const plantKeys = useSelector((state) => {
        return state.keys;
    });;

    const randomKeys = [
        {name: 'test1'},
        {name: 'test2'},
        {name: 'test3'}
    ];

    const handlePlantKeyAdd = (key) => {
        dispatch(addKey(key));
    }

    const handlePlantKeyRemove = (key) => {
        dispatch(removeKey(key));
    }

    const renderedPlantKeys = plantKeys.map((key)=>{
        return (
            <div>
                <div>{key.name}</div>
                <Button danger onClick={handlePlantKeyRemove}>
                    Remove
                </Button>
            </div>
        )
    })

    return (
        <div>
            <div>Plant Keys</div>
            <button onClick={()=>handlePlantKeyAdd(randomKeys[Math.floor((Math.random() * 2))])}>
                Add Plant Key
            </button>
            <div>
                {renderedPlantKeys}
            </div>
        </div>

    )
}

export default PlantKeyPage;