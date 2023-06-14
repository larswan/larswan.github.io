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
import Art from './components/Art'
import Bio from './components/Bio'

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
          <Route path="/art" element={<Art/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;