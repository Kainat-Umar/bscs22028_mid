import React from 'react';
import MovieItem from './movieItem';
import './movieList.css';

const MovieList = ({ movies = [] }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MovieList;