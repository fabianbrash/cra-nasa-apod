import React from 'react'
import {Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <Link to="/" className="navbar-link">Take me Home</Link>
            </ul>
        </div>
    )
}

export default NavBar
