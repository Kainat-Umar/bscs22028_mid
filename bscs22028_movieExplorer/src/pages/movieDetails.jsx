import React from 'react';
import { useParams } from 'react-router-dom';
import './movieDetails.css';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-details-page">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} className="movie-poster-large" />
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
    </div>
  );
};

export default MovieDetails;
