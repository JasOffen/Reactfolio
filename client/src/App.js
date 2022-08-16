import logo from './logo.svg';
import './App.css';

// Desktop Imports
import Header from './components/header'
import Jumbo from './components/Jumbo'
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

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

  const gitHubURL = "https://api.github.com/users/JasOffen/repos?sort=updated&direction=des&per_page=15"
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
    fetch(gitHubURL)
      .then(response =>{
        if(response.ok){
          return response.json()
        }
        throw response;
      })
      .then(data =>{
        setData(data)
      })
      .catch(error =>{
        console.log('Error fetching data: ', error)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
        console.log('Updated')
      })
  }, [])
  // Check for Mobile Size on the innerWidth

  if (windowSize.innerWidth <= 550) {
    return(
      <div>
        <HeaderMobile/>
        <About />
        {/* <Projects githubData/> */}
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
        <Projects gitData={data} gitLoading={loading} gitError={error}/>
        <Footer/>
      </div>
    );
  }
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}