import React from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({toy}) => {
    const {SellerName,category,price, quantity, toyName,_id,photo}=toy
    console.log(toy)
    return (
        <>
      <tr>
        
        <td>
          <div className="avatar">
            <div className=" rounded w-24 h-24">
              {photo && <img src={photo} alt="Didn't Uploaded" />}
            </div>
          </div>
        </td>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>${price}</td>
        <td>{quantity }</td>
        <td>{SellerName }</td>
        <td>
           
           <Link className="bg-indigo-800 btn " to={`/toys/${_id}`}>View Details</Link>
         
       </td>
      </tr>
    </>
    );
};

export default SingleToy;