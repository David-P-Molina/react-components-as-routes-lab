import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie) => (
          <div key={movie.name}>
            {movie.title} <br />
            {movie.time} <br />
            <ul>
              {movie.genres.map((gen) => <li key={gen}>{gen}</li> )}
            </ul>
          </div>
        ))}
    </div>
  )
}

export default Movies;
