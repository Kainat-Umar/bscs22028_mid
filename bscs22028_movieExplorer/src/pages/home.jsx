import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import SearchBar from '../components/searchBar'
import MovieList from '../components/movieList'

function Home() {
    return (
        <>
        <Header/>
        <SearchBar/>
        <MovieList/>
        <Footer/>
        </>
    )
}

export default Home;