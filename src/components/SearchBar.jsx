import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/search/${city}');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                required
                />
            <button type="submit">Search</button>
            </form>
    )
}

export default SearchBar;