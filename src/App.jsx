import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route
} from "react-router-dom";
import SwanPage from './components/SwanPage';
import MobileHome from './components/MobileHome';
import DesktopHome from './components/DesktopHome';
import Websites from './components/Websites'
import About from './components/About'
import Graphics from './components/Graphics';
import Cartoons from './components/Cartoons';
import Animations from './components/Animations';
import Sketches from './components/Sketches';
import MobileNavBar from './components/MobileNavBar';
import Footer from './components/Footer';

const App = () => {
  const [showFooter, setShowFooter] = useState(false)
  const isMobile = false;

  function handleScroll() {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      setShowFooter(true);
      // console.log(showFooter)
    } else {
      setShowFooter(false)
    }
  }

  window.addEventListener('scroll', handleScroll);
 
  return (
      <div className="App">
        <BrowserRouter>
          {/* {isMobile ? <MobileNavBar /> : <NavBar />} */}
          <MobileNavBar />
            <Routes>
              <Route path="/" element={isMobile ? <MobileHome /> : <DesktopHome/>} />
              <Route path="/swantogoose" element={<SwanPage/>} />
              <Route path="/projects" element={<Websites/>} />
              <Route path="/about" element={<About/>} />
          <Route path="/design" element={<Graphics footer={<Footer showFooter={showFooter} />} />} />
          <Route path="/cartoons" element={<Cartoons footer={<Footer showFooter={showFooter} />} />} />
          <Route path="/animations" element={<Animations footer={<Footer showFooter={showFooter} />} />} />
          <Route path="/sketches" element={<Sketches footer={<Footer showFooter={showFooter} />} />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;