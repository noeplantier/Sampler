import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Explore from './pages/Explore.tsx';
import './App.css';
import SampleGrid from './components/SampleGrid.tsx';
import SamplePlayer from './components/SamplePlayer.tsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
 
      <Routes>
          
          <Route path="/explore" element={<Explore />} />
          <Route path="/" element={<Home />} />        </Routes>
        <SampleGrid />
        <Navbar />
        <SamplePlayer/>
      
      </div>
    </Router>
  );
}

export default App;



