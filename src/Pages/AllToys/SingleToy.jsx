import React from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({toy}) => {
    const {SellerName,category,price, quantity, toyName,_id}=toy
    console.log(toy)
    return (
        <>
      <tr>
        
        {/* <td>
          <div className="avatar">
            <div className=" rounded w-24 h-24">
              {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
        </td> */}
        <td>{toyName}</td>
        <td>{category}</td>
        <td>${price}</td>
        <td>{quantity }</td>
        <td>{SellerName }</td>
        <th>
        <button className="btn btn-ghost btn-xs"><Link to={`/toys/${_id}`}>View Details</Link></button> 
       </th>
      </tr>
    </>
    );
};

export default SingleToy;