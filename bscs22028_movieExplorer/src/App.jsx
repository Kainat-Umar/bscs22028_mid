import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const mockMovies = [
    { id: 1, title: "Ice Age Robots", release_date: "2010-07-16", rating: 8.8, poster: "https://c8.alamy.com/comp/BKJWY7/robots-2005-animated-poster-rbot-001-009-BKJWY7.jpg" },
    { id: 2, title: "Kubo", release_date: "2008-07-18", rating: 9.0, poster: "https://i.pinimg.com/736x/b6/ef/fa/b6effa2f53051ff0cb9c318a0d162da1.jpg" },
    { id: 3, title: "Ice Age", release_date: "2014-11-07", rating: 8.6, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-eere-WtXF_J3hD_VyVV2Zu356L1dIRzHw&s" },
    { id: 4, title: "Tangled", release_date: "2017-07-21", rating: 7.9, poster: "https://i.pinimg.com/736x/f3/5e/18/f35e18c0d7fc52f7092b1bdf4847b80c.jpg" },
  ];

  useEffect(() => {
    setMovies(mockMovies);
  }, []);

  const handleSearch = (query) => {
    setMovies(mockMovies);
    navigate('/');
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} /> { }
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;