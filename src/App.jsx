import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import SwanPage from './components/SwanPage';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Websites from './components/Websites'
// import Art from './components/Animations'
import About from './components/About'
import Graphics from './components/Graphics';
import Cartoons from './components/Cartoons';
import Animations from './components/Animations';
import Sketches from './components/Sketches';

const App = () => {

  const [isMobileBrowser, setIsMobileBrowser] = useState(false)

  useEffect(()=>{
    const isMobile = /Mobi/i.test(navigator.userAgent);
    if (isMobile) setIsMobileBrowser(true)
  },[])


  return (

    <div>
      <BrowserRouter>
        {isMobileBrowser ? null : <NavBar />}
        
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/swantogoose" element={<SwanPage/>} />
            <Route path="/projects" element={<Websites/>} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/art" element={<Art/>} /> */}
            <Route path="/graphics" element={<Graphics/>} />
            <Route path="/cartoons" element={<Cartoons/>} />
            <Route path="/animations" element={<Animations/>} />
            <Route path="/sketches" element={<Sketches/>} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
};

export default App;