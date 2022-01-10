import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-link">
           <Link to="/nasaphoto" className="home-link-btn">See into the stars!</Link> 
        </div>
    )
}

export default Home
