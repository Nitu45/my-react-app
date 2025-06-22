import React, { useState } from 'react';

const AdvancedSearch = ({ onSearch }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ title, genre, rating, year });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h3>Advanced Search</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Minimum Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Release Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default AdvancedSearch;