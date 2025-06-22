import React, { useState } from 'react';
import './HoverTrailerCard.css';
import { useWatchlist } from '../context/WatchlistContext';

const HoverTrailerCard = ({ title, poster, trailer, movieObj }) => {
  const [hovered, setHovered] = useState(false);
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

  // ✅ Check if movie is in Watchlist safely
  const inWatchlist = isInWatchlist(movieObj?.id);

  const handleWatchlistClick = () => {
    if (!movieObj) return;

    if (inWatchlist) {
      removeFromWatchlist(movieObj.id);
    } else {
      addToWatchlist(movieObj);
    }
  };

  return (
    <div
      className="hover-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <video src={trailer} autoPlay muted loop className="media" />
      ) : (
        <img src={poster} alt={title} className="media" />
      )}

      <div className="movie-title">{title}</div>

      {/* ✅ Watchlist Button */}
      <button
        onClick={handleWatchlistClick}
        className="watchlist-btn"
      >
        {inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
      </button>
    </div>
  );
};

export default HoverTrailerCard;