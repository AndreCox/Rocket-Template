import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="bg-black h-screen">
      <h1 className="text-white text-4xl">About Page</h1>
      <Link className="underline text-xl text-white" to="/">
        Home
      </Link>
    </div>
  );
}

export default About;
