import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import ScheduleSection from './components/ScheduleSection';
import Partners from './components/Partners';
import GhostBot from './components/GhostBot';
import Footer from './components/Footer';
import RegisterRedirect from './components/RegisterRedirect';
import Prizes from './components/Prizes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <About />
                <ScheduleSection />
                <Prizes />
                <Partners />
              </>
            }
          />
          <Route path="/register" element={<RegisterRedirect />} />
        </Routes>
        <GhostBot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
