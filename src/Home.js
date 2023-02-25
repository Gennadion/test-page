import React, { useState } from 'react';
import GlobalStyle from './themes/global-style'
import Navbar from './components/layout/nav';
import HeroSection from './components/sections/hero';
import Collect from './components/sections/collect';
import HowToEarn from './components/sections/how2earn';
import Features from './components/sections/features';
import Lucky from './components/sections/lucky';
import Tokenomics from './components/sections/tokenomics';
import RoadMap from './components/sections/roadmap';
import Investors from './components/sections/investors';
import Footer from './components/sections/footer';


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <GlobalStyle />
        <Navbar toggle={toggle} />
        <HeroSection />
        <Collect />
        <HowToEarn />
        <Features />
        <Lucky />
        <Tokenomics />
        <RoadMap />
        <Investors />
        <Footer />
    </>
  );
}

export default Home;
