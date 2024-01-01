import { useState, useEffect } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
    const [selected, setSelected] = useState(null);

    const dropdownOptions = [
        {
            id: "1",
            label: "Scientific Name",
            value: "scientific"
        },
        {
            id: "2",
            label: "Common Name",
            value: "common"
        },
        {
            id: "3",
            label: "Family",
            value: "family"
        },
    ]

    const handleSelect = (option) => {
        setSelected(option)
    }

    return (
        <div>
            <Dropdown value={selected} onChange={handleSelect} options={dropdownOptions} />
        </div>
    )
}

export default DropdownPage;