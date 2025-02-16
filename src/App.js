import React from 'react'
import './App.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection';
import Schedule from './components/Schedule';
import FAQSection from './components/FAQSection';
import SponsorsSection from './components/SponsorsSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <Schedule />
      <FAQSection />
      <SponsorsSection />
      <TeamSection />
      <Footer />
    </div>
  )
}

export default App