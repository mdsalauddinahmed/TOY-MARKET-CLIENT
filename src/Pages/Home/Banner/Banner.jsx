import React from 'react';
import banner from  '../../../assets/banner.webp'

const Banner = () => {
    return (
        <div className="hero w-full h-[600px] bg-indigo-800 mb-8 pb-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className=" w-1/2 h-[400px] rounded-lg shadow-2xl" />
          <div className='text-center text-white'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
             
          </div>
        </div>
      </div>
    );
};

export default Banner;