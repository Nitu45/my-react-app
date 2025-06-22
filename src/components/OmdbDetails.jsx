import React, { useEffect, useState } from 'react';
import { fetchOMDbMovie } from '../api/omdbAPI';

const OMDbDetails = ({ title }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchOMDbMovie(title).then(setDetails);
  }, [title]);

  if (!details) return <p>Loading movie details...</p>;
  if (details.Response === "False") return <p>Movie not found in OMDb.</p>;

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', marginTop: '20px', borderRadius: '8px' }}>
      <h3>OMDb Details</h3>
      <p><strong>Released:</strong> {details.Released}</p>
      <p><strong>Runtime:</strong> {details.Runtime}</p>
      <p><strong>Genre:</strong> {details.Genre}</p>
      <p><strong>Plot:</strong> {details.Plot}</p>
      <img src={details.Poster} alt={details.Title} style={{ width: '200px', marginTop: '10px' }} />
    </div>
  );
};

// ✅ हे line पाहिजेच
export default OMDbDetails;