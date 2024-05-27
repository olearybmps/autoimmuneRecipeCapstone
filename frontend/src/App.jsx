import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import Dinner from './pages/Dinner';
import Snack from './pages/Snack';
import Header from './components/Header';




const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Breakfast />} />
                        <Route path="/breakfast" element={<Breakfast />} />
                        <Route path="/lunch" element={<Lunch />} />
                        <Route path="/dinner" element={<Dinner />} />
                        <Route path="/snack" element={<Snack />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
