import { useState, useRef, useEffect } from "react";
import Panel from '../components/Panel';
import { GoChevronDown } from 'react-icons/go';

function Dropdown({options, value, onChange}) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef(); // Reference specific DOM element

    useEffect(() => {
        const handler = (event) =>{
            if (!divEl.current) {
                return;
            }
            // Determine if user clicked on something inside the dropdown
            if(!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        // Want to watch during capture phase, so set third argument true
        document.addEventListener('click', handler, true);

        return ()=>{
            // Remove event listener if dropdown closed
            document.removeEventListener('click', handler);
        }
    },[])
    const handleSelectOption = (option) => {
        setIsOpen(false); // Close
        // What option did they select? Wrap an arrow function in the mapped items
        onChange(option); // This passes option back to parent
    }

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const renderedOptions = options.map((option, index)=>{
        return <div 
            className="hover:bg-sky-100 rounded cursor-pointer p-1" 
            onClick={()=>handleSelectOption(option)} key={option.id}
        >
            {option.label
        }</div>
    })
    // Only want to show option if clicked on dropdown
    return <div ref={divEl} className="w-48 relative">
        <Panel
            className="flex justify-between items-center cursor-pointer"
            onClick={handleClick}
        >
            {value?.label || 'Select...'}
            <GoChevronDown className="text-lg" />
        </Panel>
        {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
}

export default Dropdown;