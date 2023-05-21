import React from 'react';

const NewsLetter = () => {
    return (
        <div>
             <section className="  py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl text-indigo-800 font-bold text-center mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-center  ">Stay up-to-date with our latest offers, promotions, and news.</p>
        <form  className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            value= ""
            
            className="border border-gray-300 py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className=" bg-indigo-800 text-white py-2 px-6 rounded-r-md hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
    <hr />
        </div>
    );
};

export default NewsLetter;