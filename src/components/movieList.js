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
            {/* Display movies here */}
        </div>
    )
}

export default Movielist