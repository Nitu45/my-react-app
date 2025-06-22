// src/components/OMDbDetails.jsx
import React from 'react';

const OMDbDetails = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="omdb-details">
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <p>⭐ {movie.imdbRating}</p>
    </div>
  );
};

export default OMDbDetails;