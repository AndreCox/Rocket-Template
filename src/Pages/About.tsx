import React, { useContext } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Button } from '../Components/';
import { store } from '../Store';

// This function is observable you can use this to change state easily, define variables in the store
const About = observer(() => {
  return (
    <div className="">
      <h1 className="text-white text-6xl text-center mt-12">
        Template Features
      </h1>

      <div className="bg-white rounded-2xl flex basis-full flex-col mx-12 p-8 shadow-md shadow-black mt-12">
        <p className="text-xl text-center">
          Global State Management Using MobX
        </p>

        <div className="self-center mt-4">
          <Button
            text="Update Value"
            onClick={() => {
              store.count++;
            }}
          />
        </div>
        <p className="text-center text-4xl font-bold mt-4">{store.count}</p>
        <Link to="/about" className=""></Link>
      </div>
    </div>
  );
});

export default About;
