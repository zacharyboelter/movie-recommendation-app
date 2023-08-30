
const cors = require('cors')
const express = require('express')


const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())


app.get(`/api/movies/:title`, async(req, res) => {
  console.log('API route hit'); 
  const { title } = req.params;
  console.log('Movie title:', title)
  const apiKey = '6542a337'

  try {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`)
    res.json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred while fetching data from OMBD API'})
  }
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})