import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({toy}) => {
    // console.log(toy)
    const {photo,_id,price,rating,toyName}=toy
    return (
        <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
        <figure><img src= {photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <div className='flex'>
            <p>{rating}</p>
           <p>Price: ${price}</p>

          </div>
          <div className="card-actions justify-center">
            <button className="btn bg-indigo-800 border-0"><Link to={`/toys/${_id}`}>View Details</Link></button>
          </div>
        </div>
      </div>
    );
};

export default Toys;