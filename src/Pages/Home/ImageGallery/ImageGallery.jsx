import React from 'react';
import img1 from '../../../assets/img1.jpg'

const ImageGallery = () => {
    return (
        <div className='max-w-7xl mx-auto mt-20'>
            
           <h2 className='text-center'>Some of Images for Baby Doll!!</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <img className='w-60 hover:shadow-lg' src={img1} alt="" />
                <img className='w-60' src={img1} alt="" />
                <img className='w-60' src={img1} alt="" />
                <img className='w-60' src={img1} alt="" />
                <img className='w-60' src={img1} alt="" />
                <img className='w-60' src={img1} alt="" />
            
            </div>
            
        </div>
    );
};

export default ImageGallery;