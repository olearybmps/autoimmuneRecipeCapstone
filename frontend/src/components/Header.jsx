import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="header-content">
                {/* Main heading for the header */}
                <h1>Recipes to Health & Wellness</h1>
                {/* Navigation bar */}
                <nav>
                    <ul>
                        <li>
                            {/* Link to the Breakfast page */}
                            <Link to="/">Breakfast</Link>
                        </li>
                        {/* more links */}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
