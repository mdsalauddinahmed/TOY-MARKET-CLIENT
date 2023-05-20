import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleCreateUser =event=>{

    }
    return (
        


        <div className='max-w-7xl mx-auto   '>
            <h2 className='text-center text-4xl font-bold pb-10'>Please, SignUp</h2>
         <div className='p-46' > 
             <form onSubmit={handleCreateUser}>
        
          <div className="form-control w-[50%] mx-auto py-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-[50%] mx-auto">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Enter  Your Image url"
              name="photo"
              className="input input-bordered"
            />
         
        </div>
          <div className="form-control w-[50%] mx-auto">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter  your Email"
              name="email"
              className="input input-bordered"
            />
         
        </div>
          <div className="form-control w-[50%] mx-auto">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Toy Name"
              name="password"
              className="input input-bordered"
            />
         
        </div>
        <div className='form-control my-10'>
        <input type="submit"  value="Sign Up" className='btn w-[10%] mx-auto bg-lime-600 border-0 ' />
        <p className='text-center'> Already have an account,please  <Link className='text-green-400' to='/login'>Sign In</Link></p>
        </div>
       
        
        </form>
            
        </div>
        </div>
    );
};

export default SignUp;