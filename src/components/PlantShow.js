import { useState } from "react";
import PlantEdit from "./PlantEdit";

function PlantShow({plant, onDelete, onEdit}) {
    const [showEditButton, setShowEditButton] = useState(false);

    let { image_url, scientificName, commonName } = plant;

    const handleEdit = () => {
        setShowEditButton(!showEditButton);
    }

    const handleDelete = () => {
        onDelete(plant.id)
    }

    const handleSubmit = (id, scientificName) => {
        setShowEditButton(false);
        onEdit(id, scientificName); // Created in App.js and passed to here
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