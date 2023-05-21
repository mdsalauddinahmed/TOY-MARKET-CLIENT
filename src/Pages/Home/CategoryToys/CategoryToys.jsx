import React, { useEffect, useState } from 'react';
import category from './Category.css'
import Toys from './Toys';

const CategoryToys = () => {
    const [categoryToys,setCategoryToys]=useState([])
    const [activeTab, setActiveTab] = useState("Collectible_Dolls");

    useEffect(() => {
        fetch(`https://y-ten-omega.vercel.app/allToysByCategory/${activeTab}`)
          .then((res) => res.json())
          .then((result) => {
            setCategoryToys(result);
          });
      }, [activeTab]);
     


    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
    return (
       <div className='my-5 bg-indigo-800'>
         <div className='max-w-7xl mx-auto'>
        <div className=" text-center ">
        <h2 className='text-center text-4xl font-bold py-10 text-white'> We have multiple  categories Baby Doll Toys</h2>
        <div className="text-center  w-100 mx-auto">
          <div className="tabs  flex justify-center items-center ">
            <div
              onClick={() => handleTabClick("Collectible_Dolls")}
              className={`tab  tab2   ${
                activeTab == "Collectible_Dolls" ? " font-bold bg-indigo-800 text-black underline underline-offset-8" : ""
              }`}
            >
              Collectible Dolls
            </div>
            <div
              onClick={() => handleTabClick("Interactive_Dolls")}
              className={`tab  tab2   ${
                activeTab == "Interactive_Dolls" ? " bg-gray-950 font-bold text-black underline underline-offset-8" : ""
              }`}
            >
             Interactive Dolls
            </div>
            <div
              onClick={() => handleTabClick("Fashion_Dolls")}
              className={`tab  tab2   ${
                activeTab == "Fashion_Dolls" ? " font-bold text-black underline underline-offset-8" : ""
              }`}
            >
              Fashion Dolls
            </div>
          </div>
        </div>
        <div className='grid grid-col-1 lg:grid-cols-3  pt-16 pb-16 border-spacing-2 border-cyan-900'>
            {
                categoryToys?.map(toy=><Toys toy={toy} key={toy._id}></Toys>)
            }
        </div>
      </div>
            
        </div>
       </div>
    );
};

export default CategoryToys;