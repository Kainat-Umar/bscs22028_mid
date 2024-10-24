import React, { useEffect, useState } from 'react';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    fetch('http://www.omdbapi.com/?apikey&')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                if (data.Response === 'True') {
                    setMovies(data.Search);
                } else {
                    setError(data.Error);
                }
            } catch (err) {
                setError('Failed to fetch movies.');
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.imdbID}>
                        <h3>{movie.Title} ({movie.Year})</h3>
                        <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieList;