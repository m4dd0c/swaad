import React from 'react';
import './app.css'
import HeroSection from './Components/HeroSection';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import PopularCuisines from './Components/PopularCuisines.jsx';
import OurTeam from './Components/OurTeam';
import Contact from './Components/Layout/Contact';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <PopularCuisines />
      <OurTeam />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
