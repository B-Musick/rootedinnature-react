import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { BsCaretUpFill } from "react-icons/bs";

function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        // Check if same index then close it again, otherwise open the selected
        expandedIndex === nextIndex ? setExpandedIndex(-1) : setExpandedIndex(nextIndex);
    }

    const accordionItems = items.map((item, index)=>{
        const isExpanded = expandedIndex === index;
        
        const icon = <span>
            {isExpanded ? <BsCaretDownFill /> : <BsCaretUpFill />}
        </span>

        // If isExpanded is true, then returns value, otherwise returns false
        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-blue-300 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })
    return <div className="border-x border-t">{accordionItems}</div>
}

export default Accordion;