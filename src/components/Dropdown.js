import { useState } from "react";

function Dropdown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectOption = (option) => {
        setIsOpen(false); // Close
        // What option did they select? Wrap an arrow function in the mapped items
        onChange(option); // This passes option back to parent
    }

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const renderedOptions = options.map((option, index)=>{
        return <div onClick={()=>handleSelectOption(option)} key={option.id}>{option.label}</div>
    })
    // Only want to show option if clicked on dropdown
    return <div>
        <div onClick={handleClick}>
            {value?.label || "Select..."}
            </div>
        {/* If false, whole thing is false so doesnt show */}
        {isOpen && <div>{renderedOptions}</div>}
    </div>
}

export default Dropdown;