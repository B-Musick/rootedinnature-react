import PlantForm from "../components/PlantForm";
import PlantCollectionList from "../components/PlantCollectionList";
import PlantSearch from "../components/PlantSearch";
import PlantStatistics from "../components/PlantStatistics";

function CollectionSearch() {
    return (
        <div>
            <PlantForm />
            <PlantCollectionList />
            <PlantSearch />
            <PlantStatistics />
        </div>
    )
}

export default CollectionSearch;