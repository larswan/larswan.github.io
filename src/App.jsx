import React from 'react';
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
import Art from './components/Animations'
import Bio from './components/Bio'
import Graphics from './components/Graphics';
import Drawings from './components/Drawings';
import Animations from './components/Animations';

const App = () => {


  return (

    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes className="allBody">
          <Route path="/" element={<Home/>} />
          <Route path="/swantogoose" element={<SwanPage/>} />
          <Route path="/websites" element={<Websites/>} />
          <Route path="/bio" element={<Bio/>} />
          {/* <Route path="/art" element={<Art/>} /> */}
          <Route path="/graphics" element={<Art/>} />
          <Route path="/drawings" element={<Art/>} />
          <Route path="/animations" element={<Art/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;