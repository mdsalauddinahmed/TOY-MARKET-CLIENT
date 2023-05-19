import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toyItem = useLoaderData()
    console.log(toyItem)
    return (
        <div>
            
        </div>
    );
};

export default ToyDetails;