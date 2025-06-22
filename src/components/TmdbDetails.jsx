import React, { useEffect, useState } from 'react';
import { FaFilm } from 'react-icons/fa';
import data from '../tmdbData.json';

const TmdbDetails = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fake TMDb data loading
    setMovie(data);
  }, []);

  if (!movie) return <p>Loading TMDb info...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaFilm /> TMDb Movie Info
      </h2>
      <div style={{
        display: 'flex',
        gap: '20px',
        marginTop: '20px',
        flexWrap: 'wrap'
      }}>
        <img
          src={movie.poster_path}
          alt={movie.title}
          style={{ borderRadius: '10px', width: '200px' }}
        />
        <div>
          <h3>{movie.title}</h3>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};
export default TmdbDetails;