import React from 'react';
import { useParams } from 'react-router-dom';
import './ActorProfile.css';

const actorDetails = {
  'allu-arjun': {
    name: 'Allu Arjun',
    image: '/images/allu.jpg',
    bio: 'Allu Arjun is a stylish Bollywood actor known for his dance and action.'
  },
  'yash': {
    name: 'Yash',
    image: '/images/yash.jpg',
    bio: 'Yash is known for KGF and is a popular Kannada film actor.'
  },
  'salman-khan': {
    name: 'Salman Khan',
    image: '/images/salman.jpg',
    bio: 'Salman Khan is a Bollywood superstar with massive fan following.'
  },
  'ranveer-singh': {
    name: 'Ranveer Singh',
    image: '/images/ranveer.jpg',
    bio: 'Ranveer is known for his energetic performances in Bollywood.'
  },
  'shah-rukh-khan': {
    name: 'Shah Rukh Khan',
    image: '/images/srk.jpg',
    bio: 'SRK is the King of Bollywood with a global fanbase.'
  }
};

const ActorProfile = () => {
  const { id } = useParams();
  const actor = actorDetails[id];

  if (!actor) return <h2>Actor not found</h2>;

  return (
    <div className="actor-profile">
      <img src={actor.image} alt={actor.name} />
      <h2>{actor.name}</h2>
      <p>{actor.bio}</p>
    </div>
  );
};

export default ActorProfile; // ✅ ही लाईन हवीच