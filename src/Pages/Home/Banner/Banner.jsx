import React from 'react';
import banner from '../../../assets/bannar.jpg'
 

const Banner = () => {
    return (
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="  text-start  ">
        <div className="">
          <h1 className="mb-5 text-start text-7xl font-bold text-white ">Welcome to our Doll Shop</h1>
          <p className="mb-5 text-indigo-800">Explore our wide range of beautiful dolls and find your perfect companion. </p>
          
        </div>
      </div>
    </div>
    );
};

export default Banner;