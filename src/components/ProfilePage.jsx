import React from 'react';

function ProfilePage() {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '500px',
      margin: 'auto',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>👤 User Profile</h3>
      <p><strong>Name:</strong> Nitin Pawar</p>
      <p><strong>Email:</strong> nitin@pawar123.com</p>
      <p><strong>Favorites:</strong> Action, Drama, Thriller</p>
    </div>
  );
}

export default ProfilePage;