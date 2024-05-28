import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import limesImage from '../assets/limes_header.png';

function Header() {
    return (
        <header>
            <div className="header-content">
                {/* Main heading for the header */}
                <div className="header-image-container">
                    <img
                        src={limesImage}
                        alt="limes"
                        className="header-image"
                    />
                </div>
                <div className="header-text">
                    <h1>Recipes to Health & Wellness</h1>
                    {/* Navigation bar */}
                    <nav>
                        <ul>
                            <li>
                                {/* Link to the Breakfast page */}
                                <Link to="/">Breakfast</Link>
                            </li>
                            <li>
                                {/* Link to the Lunch page */}
                                <Link to="/lunch">Lunch</Link>
                            </li>
                            <li>
                                {/* Link to the Dinner page */}
                                <Link to="/dinner">Dinner</Link>
                            </li>
                            <li>
                                {/* Link to the Snack page */}
                                <Link to="/snack">Snacks</Link>
                            </li>
                            <li>
                                {/* Link to the Community page */}
                                <Link to="/user-recipes">
                                    Community Recipes
                                </Link>
                            </li>
                            {/* more links */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
