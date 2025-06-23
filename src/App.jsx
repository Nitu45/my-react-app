import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

import TrendingCarousel from './components/TrendingCarousel';
import HoverTrailerCard from './components/HoverTrailerCard';
import FavoriteActors from './components/FavoriteActors';
import MovieFilter from './components/MovieFilter';
import MovieList from './components/MovieList';
import ProfilePage from './components/ProfilePage';
import MovieRating from './components/MovieRating';
import ActorProfile from './components/ActorProfile';
import AuthModal from './components/AuthModal';
import MovieReview from './components/MovieReview';
import MovieReviewList from './components/MovieReviewList';
import WatchlistPage from './components/WatchlistPage';
import OMDbDetails from './components/OMDbdetails';
import Recommendationse from './components/Recommendations';
import AdvancedSearch from './components/AdvancedSearch';
import TmdbDetails from './components/TmdbDetails';

import { WatchlistProvider } from './context/WatchlistContext';
import { useTheme } from './context/ThemeContext';

function App() {
  const [filters, setFilters] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { darkMode, toggleTheme } = useTheme();

 
  useEffect(() => {
    axios.get('/data/movie.json')
      .then(res => setMovies(res.data))
      .catch(err => console.error("Error loading movies:", err));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.rating?.toString().includes(searchQuery)
  );

  return (
    <WatchlistProvider>
      <div style={{
        backgroundColor: darkMode ? '#121212' : '#ffffff',
        color: darkMode ? '#ffffff' : '#000000',
        minHeight: '100vh',
        transition: 'background-color 0.3s, color 0.3s'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px'
        }}>
          <div>
            <Link to="/watchlist" style={{
              padding: '8px 16px',
              backgroundColor: 'green',
              color: '#fff',
              borderRadius: '5px',
              textDecoration: 'none',
              marginRight: '10px'
            }}>My Watchlist</Link>

            <Link to="/reviews" style={{
              padding: '8px 16px',
              backgroundColor: '#6f42c1',
              color: '#fff',
              borderRadius: '5px',
              textDecoration: 'none'
            }}>All Reviews</Link>
          </div>

          <div>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
              onClick={() => setShowAuthModal(true)}
            >
              Login / Sign Up
            </button>

            <button
              onClick={toggleTheme}
              style={{
                marginLeft: '10px',
                padding: '8px 16px',
                backgroundColor: darkMode ? '#f1c40f' : '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>

        {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}

        <Routes>
          <Route path='/' element={
            <div style={{ padding: '20px' }}>
              <TrendingCarousel movies={movies} />

              <h2 style={{ marginTop: '30px' }}>🔍 Advanced Search</h2>
              <AdvancedSearch onSearch={handleSearch} />

              <h2 style={{ marginTop: '30px' }}>Movies</h2>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                padding: '20px'
              }}>
                {filteredMovies.map((movie) => (
                  <HoverTrailerCard
                    key={movie.id}
                    title={movie.title}
                    poster={movie.poster}
                    trailer={movie.trailer}
                    movieObj={movie}
                  />
                ))}
              </div>

              <h2>Favorite Actors</h2>
              <FavoriteActors />

              <h2>Filter Movies (Dropdown)</h2>
              <MovieFilter
                filters={filters}
                onFilterChange={setFilters}
                movies={movies}
              />

              <h2 style={{ marginTop: '30px' }}>View Movies: Grid/List Toggle</h2>
              <MovieList movies={movies} />

              <h2 style={{ marginTop: '30px' }}>Active Filters:</h2>
              <div style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                padding: '10px',
                marginBottom: '20px'
              }}>
                {filters.map((filter, index) => (
                  <span key={index} style={{
                    padding: '5px 10px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '14px'
                  }}>
                    {filter}
                  </span>
                ))}
              </div>

              <h2 style={{ marginTop: '40px' }}>Your Profile</h2>
              <ProfilePage />

              <h2 style={{ marginTop: '40px' }}>Rate a Movie</h2>
              <MovieRating movieTitle="Jawan" />

              <h2 style={{ marginTop: '40px' }}>Review Jawan</h2>
              <MovieReview movieId={1} />

              <h2 style={{ marginTop: '30px' }}>User Reviews</h2>
              <MovieReviewList movieId={1} />

              <h2 style={{ marginTop: '40px' }}>Movie Info (from OMDb)</h2>
              <OMDbDetails title="Jawan" />

              <h2 style={{ marginTop: '40px' }}>Recommended Movies</h2>
              {/*<Recommendations />*/}

              <h2 style={{ marginTop: '40px' }}>Movie Info (from TMDB)</h2>
              <TmdbDetails />
            </div>
          } />

          <Route path="/actor/:id" element={<ActorProfile />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </div>
    </WatchlistProvider>
  );
}

export default App;