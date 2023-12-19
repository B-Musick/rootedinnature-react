function PlantCard({plant}) {
    let {image_url, scientific_name, common_name} = plant;
    return (
        <div className="w-48 m-3 rounded-lg bg-stone-100">
            <div>
                <img className="h-32 w-full rounded-t-lg" src={image_url} alt={scientific_name} />
            </div>
            <div>
                <div className="text-gray-500">
                    <p className="font-semibold">{common_name}</p>
                    <p className="text-sm italic">{scientific_name}</p>
                </div>
            </div>
        </div>
    )
}

export default PlantCard;