import React, { useState } from 'react';
import './MovieList.css';

const movies = [
  {
    title: 'Jawan',
    poster: '/images/jawan.jpg',
    description: 'An action-packed thriller.',
  },
  {
    title: 'KGF 2',
    poster: '/images/kgf2.jpg',
    description: 'A gritty underworld saga.',
  },
  {
    title: 'RRR',
    poster: '/images/rrr.jpg',
    description: 'A patriotic epic adventure.',
  },
  {
    title: 'Pushpa',
    poster: '/images/pushpa.jpg',
    description: 'A smuggling world drama.',
  },
  {
    title: 'Pathaan',
    poster: '/images/pathaan.jpg',
    description: 'Spy thriller with high-octane action.',
  },
];

function MovieList() {
  const [view, setView] = useState('grid');

  return (
    <div className="movie-list-container">
      <div className="toggle-buttons">
        <button
          className={view === 'grid' ? 'active' : ''}
          onClick={() => setView('grid')}
        >
          Grid View
        </button>
        <button
          className={view === 'list' ? 'active' : ''}
          onClick={() => setView('list')}
        >
          List View
        </button>
      </div>

      <div className={view === 'grid' ? 'grid-view' : 'list-view'}>
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
