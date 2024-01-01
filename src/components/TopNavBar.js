// List of links
import { NavLink } from 'react-router-dom';

function TopNavBar(){
    const links = [
        { label: "Accordion", path: "/accordion"},
        { label: "Search", path: "/search" },
        { label: "Plants", path: "/plants" },
        { label: "Dropdown", path: "/dropdown" },
    ]

    const renderedLinks = links.map((link)=>{
        return <NavLink 
            key={link.label} 
            to={link.path}
            className={({isActive})=>
                isActive ? "font-bold border-b-4 border-blue-500" : ""
            }
            >{link.label}</NavLink>
    })

    return (
        <div className="flex justify-around">
            {renderedLinks}
        </div>
    )
}

export default TopNavBar;