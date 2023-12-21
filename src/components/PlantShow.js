import { useState, useContext } from "react";
import PlantEdit from "./PlantEdit";
import PlantsContext from "../context/plants";

function PlantShow({ plant }) {
    const [showEditButton, setShowEditButton] = useState(false);
    const { deletePlantById } = useContext(PlantsContext);
    let { image_url, scientificName, commonName } = plant;

    const handleEdit = () => {
        setShowEditButton(!showEditButton);
    }

    const handleDelete = () => {
        deletePlantById(plant.id)
    }

    const handleSubmit = () => {
        setShowEditButton(false);
    }

    let content = <h3>{scientificName}</h3>;

    if(showEditButton) {
        content = <PlantEdit onSubmit={handleSubmit} plant={plant} />
    }

    return (
        <div className="w-48 m-3 rounded-lg bg-stone-100">
            <div>
                <img className="h-32 w-full rounded-t-lg" src={image_url} alt={scientificName} />
            </div>
            <div>
                <div className="text-gray-500">
                    <p className="font-semibold">{commonName}</p>
                    <div className="text-sm italic">{content}</div>
                </div>
            </div>
            <button className="bg-red border rounded-md border-sky-900" onClick={handleEdit}>Edit</button>
            <button className="bg-red border rounded-md border-sky-900" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default PlantShow;