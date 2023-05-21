import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
 
    const {user,CreateUser }=useContext(AuthContext)

    const handleCreateUser =event=>{
        event.preventDefault()
        const form =event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(!name || !photo || !email || !password){
            alert("Must be fill up all input")
            //  setValue("Must be fill up all input")
        }
        if(password.length<6){
            alert('password atlest six character')
            // setError("password atleast six character")
        }
        event.target.reset();
         
        console.log(name,photo,email,password)
        CreateUser(email, password)
    .then(result =>{
        const createdUser = result.user;
        console.log(createdUser)
        Swal.fire({
          title: 'Success!',
          text: ' logged in successfully !',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      
        })
    .catch(error=>{
        console.log(error)
        Swal.fire({
          title: 'Error!',
          text: ' logged in successfully !',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
    })
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