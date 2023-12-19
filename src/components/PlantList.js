import PlantShow from './PlantShow';

function PlantList({items}) {
    const renderedItems = items.map((item)=>{
        return <PlantShow key={item.id} item={item} />
    })
    return <div className="flex flex-wrap">{renderedItems}</div>
}

export default PlantList;