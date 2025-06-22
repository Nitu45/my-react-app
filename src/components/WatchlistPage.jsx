import React from 'react';
import { useWatchlist } from '../context/WatchlistContext';

const WatchlistPage = () => {
  const { watchlist } = useWatchlist();

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist.</p>
      ) : (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {watchlist.map((movie) => (
            <div
              key={movie.id}
              style={{
                width: '200px',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '8px'
              }}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <h4 style={{ textAlign: 'center', marginTop: '10px' }}>
                {movie.title}
              </h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;