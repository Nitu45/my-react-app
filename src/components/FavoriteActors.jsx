import React from 'react';
import { Link } from 'react-router-dom';
import './FavoriteActors.css';

const actors = [
  {
    name: 'Allu Arjun',
    image: '/images/allu.jpg',
    liked: true,
    id: 'allu-arjun',
  },
  {
    name: 'Yash',
    image: '/images/yash.jpg',
    liked: true,
    id: 'yash',
  },
  {
    name: 'Salman Khan',
    image: '/images/salman.jpg',
    liked: false,
    id: 'salman-khan',
  },
  {
    name: 'Ranveer Singh',
    image: '/images/ranveer.jpg',
    liked: true,
    id: 'ranveer-singh',
  },
  {
    name: 'Shah Rukh Khan',
    image: '/images/srk.jpg',
    liked: true,
    id: 'shah-rukh-khan',
  },
];

const FavoriteActors = () => {
  return (
    <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '20px' }}>
      {actors.map((actor, index) => (
        <Link
          to={`/actor/${actor.id}`} 
          key={index}
          style={{
            display: 'inline-block',
            marginRight: '20px',
            textAlign: 'center',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <div style={{ position: 'relative' }}>
          <img
  src={actor.image}
  alt={actor.name}
  style={{
    width: '120px',
    height: '160px',
    borderRadius: '12px',
    objectFit: 'cover'
  }}
/>
            <span
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                fontSize: '18px',
                color: actor.liked ? 'red' : 'white',
              }}
            >
              ♥
            </span>
          </div>
          <div>{actor.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default FavoriteActors;