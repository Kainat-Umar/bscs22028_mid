import React from 'react'
import './header.css'

function header() {
    return (
        <>
        <body id="home">
            <header class="header">
                <a href="#home" class="logo">Movie <span>Explorer</span></a>
                <nav class="navbar">
                    <a class="active">Home</a>
                    <a>Movies</a>
                    <a>Favorites</a>
                    <a>Profile</a>
                </nav>
            </header>
            </body>
        </>
    )
}

export default header;