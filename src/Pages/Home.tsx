import React, { useState, useEffect } from 'react';
import { Button } from './../Components';
import { Link } from 'react-router-dom';
interface AppProps {}

function Home({}: AppProps) {
  // Return the App component.
  return (
    <div className="mb-8">
      <div className="flex flex-col items-center space-y-4 mt-12 text-center">
        <h1 className="text-white text-6xl text-center mb-2">
          Rocket Template
        </h1>

        <h2 className="text-white text-3xl mb-2">
          The Fastest Way to Build React Apps
        </h2>
        <p className="text-white text-6xl hover:text-7xl transition-all pb-3 hover:pb-0">
          🚀
        </p>
      </div>
      <div className="text-[#35363a] text-2xl mt-12 flex lg:flex-row flex-col text-center justify-evenly space-y-10 lg:space-y-0">
        <div className="bg-white rounded-2xl flex basis-full flex-col mx-12 p-8 shadow-md shadow-black">
          Cross Platform 📱
          <p className="text-xl mt-4 mb-4">
            Build your website app once, Then build for both IOS and Android
          </p>
          Built In Helpers ⚛️
          <p className="text-xl mt-4 mb-4">
            Comes with React, Routing, and Tailwind CSS out of the box. MobX
            state management coming soon!
          </p>
          Lightning Fast Development ⚡
          <p className="text-xl mt-4 mb-4">
            Uses React Hooks and TypeScript to speed up development. Snowpack by
            default for bundling no more waiting for your builds to complete.
          </p>
          <Link to="/about" className="mt-auto">
            <Button text="Learn More" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
