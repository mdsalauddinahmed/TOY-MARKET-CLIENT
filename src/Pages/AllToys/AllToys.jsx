import React, { useEffect, useState } from 'react';
import SingleToy from './SingleToy';

const AllToys = () => {
     const [toys,setToys]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/allToys')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
         setToys(data)
    })
  },[])
    
  console.log(toys)

    return (


         <div className='max-w-7xl mx-auto'>
            <h1 className='text-4xl text-center my-12'>There are lot of Doll  Toys  here!!</h1>

           
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Photo</th>
        <th>Toy Name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Seller Name</th>
        <th>See Details</th>
      </tr>
    </thead>
    <tbody>
        {
           toys.map(toy=><SingleToy toy={toy} key={toy._id}></SingleToy>)
        }
    </tbody>
     
    
  </table>
</div>
        
       
        </div>
    );
};

export default AllToys;