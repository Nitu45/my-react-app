
import React from 'react';
import './ActorCard.css';

const ActorCard = ({ actor, onToggleFavorite, isFavorite }) => {
  return (
    <div className="actor-card">
      <img src={actor.image} alt={actor.name} />
      <h4>{actor.name}</h4>
      <button
        className={`heart-btn ${isFavorite ? 'favorited' : ''}`}
        onClick={() => onToggleFavorite(actor.id)}
      >
        ❤
      </button>
    </div>
  );
};

export default ActorCard;
