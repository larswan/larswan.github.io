import React from 'react';
import styled, { css } from 'styled-components';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SwanPage from './components/SwanPage';

const router = createBrowserRouter([
  {
    path: "/",
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
]);

const App = () => {


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;