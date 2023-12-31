// List of links
import Link from "./Link";

function TopNavBar(){
    const links = [
        { label: "Accordion", path: "/accordion"},
        { label: "Search", path: "/search" },
    ]

    const renderedLinks = links.map((link)=>{
        return <Link 
            key={link.label} 
            to={link.label}
            activeClassName="font-bold border-b-4 border-blue-500"
            >{link.label}</Link>
    })

    return (
        <div className="flex justify-around">
            {renderedLinks}
        </div>
    )
}

export default TopNavBar;