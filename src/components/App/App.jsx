import React from "react";
import { Routes, Route } from 'react-router-dom';
import "bulma/css/bulma.min.css";
import "./App.css";
import { Box } from "react-bulma-components";

import Header from "../Header/Header";
import RenderProgress from "../Progress/Progress";
import RenderCards from "../Cards/Cards";
import Main from "../Main/Main";
import Ideas from "../Ideas/Ideas";

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          // <Box>
          <>
            <Header/>
            <Main/>
          </>
          // </Box>
        }
      ></Route>
      <Route
        path='/other-ideas'
        element={
          <>
            <Header/>
            <Ideas/>
          </>
        }
      ></Route>
      <Route
        path='/progress-bar'
        element={
          <Box>
            {Header()}
            {RenderProgress()}
          </Box>
        }
      ></Route>
      <Route
        path='/promo'
        element={
          <>
            <Header/>
            <RenderCards/>
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;