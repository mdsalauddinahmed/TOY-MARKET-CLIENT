import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
     const [ra ,setRa]=useState(0)
  const toys = useLoaderData();
  console.log(toys);

  const {
    photo,
    description,
    price,
    quantity,
    rating,
    toyName,
    SellerName,
    email,
  } = toys;
  return (
    <div>
      <div className="hero min-h-screen bg-indigo-800">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={photo}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          
          <div className="text-white space-y-4 text-center">
            <h1 className="text-5xl font-bold"> {toyName}</h1>
            <p className="text-2xl">Seller Name: { SellerName}</p>

             <p className="text-2xl">Email: {email}</p>
             <div className="flex gap-10 w-[80%] mx-auto ">
                <p>Price :${price}</p>
                <p>Available quantity :{ quantity }</p>
                <Rating style={{ maxWidth: 150 }}  value={rating}  onChange={setRa}  />
                <span>{rating}</span>
             </div>
            <p className="py-6">{description}</p>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
