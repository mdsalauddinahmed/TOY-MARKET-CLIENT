import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import Swal from "sweetalert2";

const AddToys = () => {
    useTitle('addToys')
  const{user}=useContext(AuthContext)
   const handleAddToys=event=>{
    event.preventDefault()
    const form= event.target;
    const photo =form.photo.value;
    const toyName = form.ToyName.value;
    const SellerName =form.sellerName.value;
    const email = form.email.value;
    const category= form.category.value;
    const price = form.price.value;
    const rating= form.rating.value;
     const quantity =form.quantity.value;
     const description = form.description.value;
      const addToys ={
        photo,toyName,SellerName,email,category,price,rating,quantity,description
      }
    
 fetch("https://y-ten-omega.vercel.app/addToys",{
    method:"POST",
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(addToys)

 })
 .then(res=>res.json())
 .then(data=>{
    console.log(data)
    Swal.fire({
        title: 'Success!',
        text: 'Updated successfully !',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
 })
   



   }




  return (
   <div className="bg-indigo-800 py-10">
     <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl my-4 font-bold  text-center text-white">Add A toy for sell. <br /> Earn money and be happy with Our company</h1>
      <form onSubmit={handleAddToys}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Toy photo"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Toy Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Toy Name"
              name="ToyName"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              placeholder="Seller Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">User Email</span>
            </label>
            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" />
          </div>
          <div className="form-control">
            <label  className="label text-white">Choose a category:</label>
            <select className="input input-bordered"  name="category">
              <option value="Collectible_Dolls">Collectible Dolls</option>
              <option value="Interactive_Dolls">Interactive Dolls</option>
              <option value="Fashion_Dolls">Fashion Dolls</option>
               
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Price</span>
            </label>
            <input type="text" name="price" placeholder="price" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Ratings</span>
            </label>
            <input type="text" name="rating" placeholder="Out of Five" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Available Quantity</span>
            </label>
            <input type="text" name="quantity" placeholder="Out of Five" className="input input-bordered" />
          </div>
          
        </div>
        <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Description</span>
            </label>
            <textarea   name="description" rows="4" cols="40" className="input input-bordered"></textarea>
          </div>
        <div className="form-control  ">
          <input
            className="btn bg-green-600 border-0 w-36 mx-auto my-16"
            type="submit"
            value="Add Toy"
          />
        </div>
      </form>
    </div>
   </div>
  );
};

export default AddToys;
