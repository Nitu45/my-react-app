
import React, { useState } from 'react';
import actors from '../data/actorData';
import ActorCard from './ActorCard';
import './FavoriteActors.css';

const FavoriteActors = () => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const toggleFavorite = (id) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="favorite-container">
      <h2>All Actors</h2>
      <div className="actor-list">
        {actors.map((actor) => (
          <ActorCard
            key={actor.id}
            actor={actor}
            isFavorite={favoriteIds.includes(actor.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <h2>Favorite Actors</h2>
      <div className="actor-list">
        {actors
          .filter((actor) => favoriteIds.includes(actor.id))
          .map((actor) => (
            <ActorCard
              key={actor.id}
              actor={actor}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />
          ))}
      </div>
    </div>
  );
};

export default FavoriteActors;
