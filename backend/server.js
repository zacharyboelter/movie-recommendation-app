

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.get('api/movies/:title', async(req, res) => {
  const { title } = req.params
  const apiKey = '74d35cd9'

  try {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
    res.json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred while fetching data from OMBD API'})
  }
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})