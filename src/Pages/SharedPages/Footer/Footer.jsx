import React from 'react';
import logo from '../../../assets/logo.jpg'
import { Link } from 'react-router-dom';
import facebook from '../../../assets/facebook.webp'
import instagram from '../../../assets/ccb8029d-fa5c-459c-9b0d-b4c86327f742.png'
import  twitter from '../../../assets/twitter.png'
 

const Footer = () => {
    return (
       <div className='py-20'>
         <footer className="footer bottom-0 p-10   text-base-content">
        <div className='text-center'>
           <div className='max-w-2xl mx-auto'>
           <img style={{width:'100px',height:'100px',borderRadius:"50%"}} src={logo} alt="" />
           </div>
           <p className='text-4xl font-bold text-indigo-800 '>Doll Fantasy Land</p>
        </div> 
         
        <div className='text-center'>
          <span className="font-bold text-indigo-800 ">Address:</span> 
          <a className=" ">Road:123 street</a> 
          <a className="link link-hover">Mumbai</a> 
          <a className="link link-hover">India</a> 
          
        </div> 
        <div>
          <span className=" font-bold text-indigo-800">Contact Information:</span> 
          <a className="link link-hover">Email: info@company.com</a> 
          <a className="link link-hover">Phone: 123-456-7890</a> 
          <div className='flex'>
            <Link><img  style={{width:'50px',height:'50px',borderRadius:"50%"}} src={facebook} alt="" /></Link>
            <Link> <img  style={{width:'50px',height:'50px',borderRadius:"50%"}} src={instagram} alt="" /></Link>
            <Link><img  style={{width:'50px',height:'50px',borderRadius:"50%"}} src={twitter} alt="" /></Link>
             
        
         </div>
        </div>
      </footer>
      <p className=" text-center font-bold text-indigo-800 ">
          &copy; {new Date().getFullYear()} Doll Fantasy Land. All rights reserved.
        </p>
       </div>
      
    );
};

export default Footer;