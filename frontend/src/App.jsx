// Import dependencies from React and React Router
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import Dinner from './pages/Dinner';
import Snack from './pages/Snack';
import UserRecipes from './pages/UserRecipes';

// Import Header component
import Header from './components/Header';

// Define main App component
const App = () => {
    return (
        // Set up Router for navigation
        <Router>
            <div className="app-container">
                {/* Include Header component */}
                <Header />
                <main>
                    {/* Define routes for application */}
                    <Routes>
                        {/* Default Route: Home Page */}
                        <Route path="/" element={<Breakfast />} />
                        <Route path="/breakfast" element={<Breakfast />} />
                        <Route path="/lunch" element={<Lunch />} />
                        <Route path="/dinner" element={<Dinner />} />
                        <Route path="/snack" element={<Snack />} />
                        <Route path="/user-recipes" element={<UserRecipes />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

// Export App component as default export
export default App;
