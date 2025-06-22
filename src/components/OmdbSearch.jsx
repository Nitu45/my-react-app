import React, { useState } from 'react';
import axios from 'axios';

const OmdbSearch = () => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState(null);

  const searchMovie = () => {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    axios
      .get(https://www.omdbapi.com/?t=${query}&apikey=${apiKey})
      .then(res => setMovie(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Search Movie (OMDb)</h2>
      <input
        type="text"
        value={query}
        placeholder="Enter movie title"
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '250px' }}
      />
      <button onClick={searchMovie} style={{ marginLeft: '10px', padding: '10px' }}>
        Search
      </button>

      {movie && movie.Response !== 'False' && (
        <div style={{ marginTop: '20px' }}>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} style={{ height: '300px' }} />
          <p>{movie.Plot}</p>
          <p><strong>Rating:</strong> {movie.imdbRating}</p>
        </div>
      )}
    </div>
  );
};

export default OmdbSearch;