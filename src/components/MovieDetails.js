import React from "react";


function MovieDetails({ movieData }) {
    return (
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
    )
}

export default MovieDetails