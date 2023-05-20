import React from 'react';
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
// import download from '../../../assets/download.jpg'
import img30 from '../../../assets/img7.jpg'
import img3 from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img5.jpg'
import img6 from '../../../assets/img6.jpg'
import img18 from '../../../assets/mig18.jpg'
 
import img10 from '../../../assets/img10.jpg'
 

const ImageGallery = () => {
    return (
        <div className='bg-indigo-800 py-20'>
            <div className='max-w-7xl mx-auto   '>
            
            <h2 className='text-center text-4xl font-bold pb-10  text-white'>Some of Images for Baby Doll!!</h2>
 
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
                 <img className='w-60   h-60 hover:shadow-lg rounded-lg border-2' src={img1} alt="" />
                 <img className='w-60  h-60 hover:shadow-lg rounded-lg border-2' src={img30 } alt="" />
                 <img className='w-60  h-60 hover:shadow-lg rounded-lg border-2' src={img3} alt="" />
                 <img className='w-60  h-60 hover:shadow-lg rounded-lg border-2' src={img18} alt="" />
                 <img className='w-60  h-60 hover:shadow-lg rounded-lg border-2' src={img2} alt="" />
                 
             </div>
             <div className='grid grid-cols-1 lg:grid-cols-5 mt-10'>
             <img className='w-60 rounded-lg border-2 hover:shadow-lg' src={img5} alt="" />
             <img className='w-60 rounded-lg border-2 hover:shadow-lg' src={img6} alt="" />
             <img className='w-60 rounded-lg border-2 hover:shadow-lg' src={img10} alt="" />
             <img className='w-60 rounded-lg border-2 hover:shadow-lg' src={img10} alt="" />
             <img className='w-60 rounded-lg border-2 hover:shadow-lg' src={img10} alt="" />
             </div>
             
         </div>
        </div>
    );
};

export default ImageGallery;