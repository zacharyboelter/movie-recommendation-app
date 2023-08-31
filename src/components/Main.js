
import React, {useState} from "react"
import MovieSearch from "./MovieSearch"
import MovieDetails from "./MovieDetails"
import axios from 'axios'


function Main() {
    const [movieData, setMovieData] = useState(null)

    const fetchMovieData = async (title) => {
        // event.preventDefault()
        console.log('fetchMovieData called')
        try {
            const response = await axios.get(`/api/movies/${encodeURIComponent(title)}`)
            console.log('API request:', response.data)
            setMovieData(response.data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    return (
        <div>
            <MovieSearch onSearch={fetchMovieData} />
            {movieData && <MovieDetails movieData={movieData} />}
        </div>
    )
}


export default Main