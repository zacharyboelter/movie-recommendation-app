import React, {useState} from "react";
import axios from 'axios'
import { Button } from "@mui/material";

const MovieSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted'); // Debugging line
        console.log('Search query:', query); // Debugging line
        onSearch(query);
      };

    return (
        <div>
            <h2>Search for a Movie</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter a movie title"
                />
                <Button type="submit" variant="contained" color="primary">Search</Button>
            </form>
        </div>
    )
}

export default MovieSearch