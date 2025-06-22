import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieReviewList = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return; 

    axios
      .get('/data/review.json')
      .then(res => {
        const filtered = res.data.filter(r => r.movieId === movieId);
        setReviews(filtered);
      })
      .catch(err => console.error('Error fetching reviews:', err));
  }, [movieId]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Reviews for Movie ID: {movieId}</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet for this movie.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {reviews.map((rev, index) => (
            <li key={index} style={{
              backgroundColor: '#f9f9f9',
              marginBottom: '15px',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}>
              <p><strong>Review:</strong> {rev.review}</p>
              <p style={{ fontSize: '12px', color: '#555' }}>
                <em>{new Date(rev.date).toLocaleString()}</em>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviewList;