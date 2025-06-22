import React, { useState } from 'react';

const moviesData = [
  {
    id: 1,
    title: 'Jawan',
    poster: '/images/jawan.jpg',
    genre: 'Action',
    rating: '5',
    description: 'An action thriller about a vigilante cop.',
  },
  {
    id: 2,
    title: 'KGF 2',
    poster: '/images/kgf2.jpg',
    genre: 'Action',
    rating: '4',
    description: 'The rise of Rocky as the underworld king.',
  },
  {
    id: 3,
    title: 'RRR',
    poster: '/images/rrr.jpg',
    genre: 'Drama',
    rating: '4',
    description: 'Fictional story of two Indian revolutionaries.',
  },
  {
    id: 4,
    title: 'Pushpa',
    poster: '/images/pushpa.jpg',
    genre: 'Action',
    rating: '4',
    description: 'Red sanders smuggler’s rise to power.',
  },
  {
    id: 5,
    title: 'Pathaan',
    poster: '/images/pathaan.jpg',
    genre: 'Thriller',
    rating: '3',
    description: 'Spy thriller with high-octane action.',
  },
];

const MovieFilter = ({ filters, onFilterChange }) => {
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  const handleGenreChange = (e) => {
    const selected = e.target.value;
    setGenre(selected);
    const updated = filters.filter(f => !["Action", "Drama", "Thriller"].includes(f));
    onFilterChange(selected ? [...updated, selected] : updated);
  };

  const handleRatingChange = (e) => {
    const selected = e.target.value;
    setRating(selected);
    const updated = filters.filter(f => !["5", "4", "3"].includes(f));
    onFilterChange(selected ? [...updated, selected] : updated);
  };

  const filteredMovies = moviesData.filter(movie => {
    return (
      (filters.includes(movie.genre) || !["Action", "Drama", "Thriller"].some(f => filters.includes(f))) &&
      (filters.includes(movie.rating) || !["5", "4", "3"].some(f => filters.includes(f)))
    );
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Filter Movies</h2>

      {/* Filter Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '20px'
      }}>
        <select value={genre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Thriller">Thriller</option>
        </select>

        <select value={rating} onChange={handleRatingChange}>
          <option value="">All Ratings</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
        </select>
      </div>

      {/* Movie Cards */}
      <div style={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        padding: '10px',
      }}>
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            style={{
              display: 'inline-block',
              width: '180px',
              marginRight: '15px',
              textAlign: 'center',
              border: '1px solid #ccc',
              borderRadius: '10px',
              backgroundColor: '#fff',
              padding: '10px'
            }}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              style={{
                width: '100%',
                height: '270px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
            <h4>{movie.title}</h4>
            <p>{movie.genre} | ⭐ {movie.rating}</p>
            <p style={{ fontSize: '12px', color: '#555' }}>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieFilter;