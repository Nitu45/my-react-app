import React, { useState } from 'react';
import '../styles/MovieRating.css';  

const MovieRating = ({ movieTitle }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'filled' : ''}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
      <span className="rating-label">({rating})</span>
    </div>
  );
};

export default MovieRating;