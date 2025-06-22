import React, { useState } from 'react';
import axios from 'axios';

const MovieReview = () => {
  const [review, setReview] = useState('');
  const [movieId, setMovieId] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!review || !movieId) return;

    try {
      await axios.post('http://localhost:5000/reviews', {
        movieId,
        review,
        date: new Date().toISOString()
      });
      setSubmitted(true);
      setReview('');
      setMovieId('');
    } catch (err) {
      console.error('Error submitting review:', err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Submit a Movie Review</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <input
          type="text"
          placeholder="Movie ID"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <textarea
          placeholder="Write your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          style={{ width: '100%', padding: '10px', height: '100px', marginBottom: '10px' }}
        />
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}>
          Submit Review
        </button>
        {submitted && <p style={{ marginTop: '10px', color: 'green' }}>✅ Review submitted!</p>}
      </form>
    </div>
  );
};

export default MovieReview;