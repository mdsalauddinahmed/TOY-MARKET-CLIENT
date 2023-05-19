import React from "react";

const AddToys = () => {

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
      console.log(addToys)
   }




  return (
    <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl my-4 text-green-600 text-center">Add A toy for sell. <br /> Earn money and be happy with Our company</h1>
      <form onSubmit={handleAddToys}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
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
              <span className="label-text">Toy Name</span>
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
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              placeholder="Seller Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input type="email" name="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label  className="label">Choose a category:</label>
            <select className="input input-bordered"  name="category">
              <option value="Collectible Dolls">Collectible Dolls</option>
              <option value="Interactive Dolls">Interactive Dolls</option>
              <option value="Fashion Dolls">Fashion Dolls</option>
               
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input type="text" name="price" placeholder="price" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input type="text" name="rating" placeholder="Out of Five" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input type="text" name="quantity" placeholder="Out of Five" className="input input-bordered" />
          </div>
          
        </div>
        <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
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
  );
};

export default AddToys;
