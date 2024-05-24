import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/breakfast">Breakfast</Link>
                </li>
                <li>
                    <Link to="/lunch">Lunch</Link>
                </li>
                <li>
                    <Link to="/dinner">Dinner</Link>
                </li>
                <li>
                    <Link to="/chronic-conditions">Chronic Conditions</Link>
                </li>
                <li>
                    <Link to="/user-recipes">User Recipes</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
