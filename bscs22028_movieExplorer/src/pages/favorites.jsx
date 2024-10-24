import React from 'react';
import MovieItem from '../components/movieItem';
import './favorites.css';

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites-page">
      <h2>Your Favorite Movies</h2>
      {favorites.length > 0 ? (
        <div className="favorite-list">
          {favorites.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p>You have no favorite movies yet.</p>
      )}
    </div>
  );
};

export default Favorites;
