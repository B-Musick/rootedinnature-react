import PlantCreate from "../components/PlantCreate";
import PlantList from "../components/PlantList";
import PlantSearch from "../components/PlantSearch";
import PlantValue from "../components/PlantValue";

function CollectionSearch() {
    return (
        <div>
            <PlantCreate />
            <PlantList />
            <PlantSearch />
            <PlantValue />
        </div>
    )
}