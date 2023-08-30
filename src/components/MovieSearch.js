import React, {useState} from "react";
import axios from 'axios'

const MovieSearch = () => {
    const [query, setQuery] = useState('')
    const [movieData, setMovieData] = useState(null)

    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    const fetchMovieData = async (event) => {
        event.preventDefault()
        
        try {
            const response = await axios.get(`/api/movies/${query}`)
            setMovieData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h2>Search for a Movie</h2>
            <form onSubmit={}fetchMovieData>
                <input 
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Enter a movie title"
                />
                <button type="submit">Search</button>
            </form>
            {movieData && (
                <div>
                    <h3>{movieData.Title}</h3>
                    <p>Year: {movieData.Year}</p>
                    <p>Genre: {movieData.Genre}</p>
                    <p>Director: {movieData.Director}</p>
                    <p>Actors: {movieData.Actors}</p>
                    <p>Plot: {movieData.Plot}</p>
                    <p>IMDB Rating: {movieData.imdbRating}</p>
                    <img src={movieData.Poster} alt={`${movieData.Title} Poster`} />
                </div>
            )}
        </div>
    )
}

export default MovieSearch