import React from "react";
import { Link } from "react-router-dom";

const MySingleToysROw = ({ toy,handleDelete }) => {
  const { SellerName, category, price, quantity, toyName, _id,photo } = toy;
  return (
    < >
      <tr className="">
        <td>
          <button onClick={()=>handleDelete(_id)} className="btn btn-square btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
        <td>
          <div className="avatar">
            <div className=" rounded w-24 h-24">
              {photo && <img src={photo} alt="Didn't uploaded" />}
            </div>
          </div>
        </td>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>{SellerName}</td>
         <td ><span className="bg-indigo-800 btn">update</span></td>
        <td>
           
            <Link className="bg-indigo-800 btn " to={`/toys/${_id}`}>View Details</Link>
          
        </td>
      </tr>
    </>
  );
};

export default MySingleToysROw;
