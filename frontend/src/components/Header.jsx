import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Recipes to Wellness</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Breakfast</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
