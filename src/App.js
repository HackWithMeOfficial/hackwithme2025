import React from 'react'
import './App.css';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection';
import Schedule from './components/Schedule';
import SponsorsSection from './components/SponsorsSection';
import FAQSection from './components/FAQSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <Schedule />
      <SponsorsSection />
      <FAQSection />
      <TeamSection />
      <Footer />
    </div>
  )
}

export default App