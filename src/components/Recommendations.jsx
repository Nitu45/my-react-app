import React from 'react';

const Recommendations = ({ movies }) => {
  const recommended = movies.slice(0, 5); // dummy logic for top 5

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>🎯 Recommended Movies</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
      }}>
        {recommended.map((movie) => (
          <div key={movie.id} style={{
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '10px',
            width: '160px',
            textAlign: 'center',
            backgroundColor: '#fff'
          }}>
            <img src={movie.poster} alt={movie.title} style={{ width: '100%', borderRadius: '5px' }} />
            <h4 style={{ marginTop: '10px' }}>{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;