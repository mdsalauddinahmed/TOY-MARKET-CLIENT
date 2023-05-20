import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import { AuthContext } from '../../Provider/AuthProvider';
 

const Login = () => {
    const{signIn,logInWithGoogle}=useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from=location.state?.from?.pathname || '/'

    const handleLogin=event=>{
        event.preventDefault()
        const form= event.target;
        const email = form.email.value;
        const  password = form.password.value;
        // event.reset()
        console.log(email, password)
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate( from,{replace:true})
              
        })
        .catch(error =>{
              console.log(error)
        })
    }

//   log in by google
const handleLogInGoogle=()=>{
    console.log('clicked')
     logInWithGoogle()
    //  navigate( from, {replace:true})
     .then((result) => {
      const user = result.user;
    //    setUser(user);
    navigate( from,{replace:true})
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
       console.log(errorMessage)
      
    });
   }


    return (
        <div className='max-w-7xl mx-auto   '>
            <h2 className='text-center text-4xl font-bold pb-10'>Please,Login now</h2>
         <div className='p-46' > 
             <form onSubmit={handleLogin}>
        
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
              placeholder="password"
              name="password"
              className="input input-bordered"
            />
         
        </div>
        <div className='form-control mt-10'>
        <input type="submit"  value="Sign In" className='btn w-[8%] mx-auto bg-lime-600 border-0  ' />
        <p className='text-center'>Didn't have any account Please  <Link className='text-green-400' to='/signUp'>Sign Up</Link></p>
        </div>
       
        
        </form>
        <div className='w-[15%] mx-auto mb-12'>
         <button  onClick={handleLogInGoogle}  className='btn bg-lime-600 border-0  '>Sign In by Google</button>
        </div>
        
           
        </div>
        </div>
        
    );
};

export default Login;