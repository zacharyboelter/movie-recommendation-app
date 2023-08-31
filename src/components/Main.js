




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