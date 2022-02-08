import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface AppProps {}

function Home({}: AppProps) {
  // Return the App component.
  return (
    <div className="bg-black h-screen flex flex-col">
      <h1 className="text-white text-4xl">Rocket Template 🚀</h1>
      <Link to="/about" className="text-white underline">
        Example Of A Route
      </Link>
    </div>
  );
}

export default Home;
