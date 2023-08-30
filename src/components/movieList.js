import React, {useEffect, useState} from "react"
import axios from "axios"



const Movielist = () => {
    const [movies, setMovies] = useState([])

    useEffect( () => {
        //fetch movie data from API
        axios.get('/api/movies')
            .then(response => {
                setMovies(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])



    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Movielist