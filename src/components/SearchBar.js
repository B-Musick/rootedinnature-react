import { useState } from "react";

function SearchBar({onSubmit}) {
    const [query, setQuery] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Will read what user has typed in searchbar
        onSubmit(query);
    }

    const handleChange = (event) => {
        setQuery(event.target.value);
    }
    return <div>
        <form onSubmit={handleFormSubmit}>
            <input className="border rounded-md border-sky-900 focus:outline-none focus:border-blue-400" value={query} onChange={handleChange} />
        </form>
    </div>
}

export default SearchBar;