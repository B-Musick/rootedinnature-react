import { useContext } from 'react';
import PlantsContext from '../context/plants';

function usePlantsContext() {
    return useContext(PlantsContext);
}

export default usePlantsContext;