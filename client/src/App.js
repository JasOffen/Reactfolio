import logo from './logo.svg';
import './App.css';

// Desktop Imports
import Header from './components/header'
import Jumbo from './components/Jumbo'
import Projects from './components/Projects';
import About from './components/About';

// Mobile Imports
import HeaderMobile from './componentsMobile/Header';

import { useEffect, useState } from 'react';

export default function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // Check for Mobile Size on the innerWidth
  if (windowSize.innerWidth <= 550) {
    return(
      <div>
        <HeaderMobile/>
        <Jumbo />
        <Projects />
        <h2>Width: {windowSize.innerWidth}</h2>
        <h2>Height: {windowSize.innerHeight}</h2>
      </div>
      )
  } else {

    return (
      <div>
        <Header />
        <About />
        <Jumbo />
        <Projects />
        <h2>Width: {windowSize.innerWidth}</h2>
        <h2>Height: {windowSize.innerHeight}</h2>
      </div>
    );
  }
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}