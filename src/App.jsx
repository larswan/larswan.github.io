import React from 'react';
// import styled, { css } from 'styled-components';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SwanPage from './components/SwanPage';
import Home from './components/Home';
import NavBar from './components/NavBar';

export const router = createBrowserRouter([
  {
    path: "/swanthegoose",
    element: <SwanPage />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: "/",
    element: <Home />,
  }
]);

const App = () => {


  return (

    <div>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;