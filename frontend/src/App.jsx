import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Breakfast from './pages/Breakfast';
import Header from './components/Header';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Breakfast />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
