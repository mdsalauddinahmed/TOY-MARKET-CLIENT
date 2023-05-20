import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.png'
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const[showName,setShowName]=useState(false)


  // show name
const handleShowName =()=>{
  setShowName(true)
}

const handleMouseLeave =()=> {
  setShowProfileName(false);
}

  // logout

const handleLogOut=()=>{
  logOut()
  .then()
  .catch(error=>console.log(error))
}

    return (
       < div className='bg-lime-00'>
        <div className="navbar  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li className='font-bold text-dark'><Link to="/">Home</Link></li>
              <li className='font-bold text-dark'>
              <Link to="/blog">Blog</Link>
              </li>
              <li className='font-bold text-violet-600'><Link to="/allToys">All Toys</Link></li>
              {
            user && <>
              < li className='font-bold  text-violet-600'><Link to="/addToys">Add toys</Link></li>
              <li className='font-bold  text-violet-600'><Link to="/myToys">My Toys</Link></li>
              
            </>
             
           }
              {
            user? <> <li>
            
             <img   style={{width:'80px',height:'80px',borderRadius:"50%"}} onMouseEnter={handleShowName} onMouseLeave={handleMouseLeave} src={user?.photoURL} alt="not found"  />
              
              {
               showName && <span className=' text-violet-600'>{user.displayName}</span>
            }
             
            </li>
            <li><button onClick={handleLogOut}>log Out</button></li>
             
            </>: < li className='font-bold bg-indigo-800 rounded  '><Link className='btn bg-indigo-800 text-white' to="/login">Login</Link></li>
          }
            </ul>
          </div>
          <Link to="/">
            <img className='w-16 h-16' src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='font-bold text-green-800'><Link to="/">Home</Link></li>
            <li className='font-bold text-green-900'>
            <Link to="/blog">Blog</Link>
            </li>
            <li className='font-bold text-violet-600'><Link to="/allToys">All Toys</Link></li>

         
           {
            user && <>
              < li className='font-bold  text-violet-600'><Link to="/addToys">Add toys</Link></li>
              <li className='font-bold  text-violet-600'><Link to="/myToys">My Toys</Link></li>
              
            </>
             
           }
             
          
         
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
          {
            user? <> <li>
            
             <img   style={{width:'80px',height:'80px',borderRadius:"50%"}} onMouseEnter={handleShowName} onMouseLeave={handleMouseLeave} src={user?.photoURL} alt="not found"  />
              
              {
               showName && <span className=' text-violet-600'>{user.displayName}</span>
            }
             
            </li>
             <li className=' btn  text-white mt-6 rounded bg-indigo-800' onClick={handleLogOut}>log Out</li>
            </>: < li className='font-bold bg-indigo-800 rounded  '><Link className='btn bg-indigo-800 text-white' to="/login">Login</Link></li>
          }
       
          </ul>
       
        </div>
        
        </div>
       
       
       </div>
       
    );
};

export default Navbar;