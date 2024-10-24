import React from 'react';
import { Link } from 'react-router-dom';
import './MovieItem.css';

const MovieItem = ({ movie }) => {
  const defaultPoster = "abc";
  return (
    <div className="movie-item">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.poster || defaultPoster} alt={movie.title || 'Movie Poster'} className="movie-poster" />
      </Link>
      <div className="movie-details">
        <h3>{movie.title || 'Unknown Title'}</h3>
        <p>Release Date: {movie.release_date || 'Unknown'}</p>
        <p>Rating: {movie.rating || 'N/A'}</p>
      </div>
    </div>
  );
};

export default MovieItem;