import React from 'react';
import { Link } from 'react-router-dom'; 
 

const Login = () => {
    const handleLogin=event=>{

    }
    return (
        <div className='max-w-7xl mx-auto   '>
            <h2 className='text-center text-4xl font-bold pb-10'>Please,Login now</h2>
         <div className='p-46' > 
             <form onSubmit={handleLogin}>
        
          <div className="form-control w-[50%] mx-auto py-2">
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
          <div className="form-control w-[50%] mx-auto">
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
        <div className='form-control mt-10'>
        <input type="submit"  value="Sign In" className='btn w-[8%] mx-auto bg-lime-600 border-0  ' />
        <p className='text-center'>Didn't have any account Please  <Link className='text-green-400' to='/signUp'>Sign Up</Link></p>
        </div>
       
        
        </form>
        <div className='w-[15%] mx-auto mb-12'>
         <button   className='btn bg-lime-600 border-0  '>Sign In by Google</button>
        </div>
        
           
        </div>
        </div>
        
    );
};

export default Login;