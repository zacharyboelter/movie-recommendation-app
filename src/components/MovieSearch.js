import React, {useState} from "react";
import { Button, TextField } from "@mui/material";
import { makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    searchContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius,
        marginBottom: theme.spacing(2),
    },
    input: {
        width: '100%',
        marginBottom: theme.spacing(1),
    },
    button: {
        width: '100%',
    },
}));

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