import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
//import the different pages from the pages folder
//add your own pages here
import { Home, About } from './Pages/';

import './App.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
