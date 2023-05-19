import React, { useState } from 'react';
import category from './Category.css'

const CategoryToys = () => {
    const [activeTab, setActiveTab] = useState("Collectible_Dolls");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
    return (
        <div>
        <div className=" text-center h-48">
        <div className="text-center w-100 mx-auto">
          <div className="tabs  flex justify-center items-center">
            <div
              onClick={() => handleTabClick("Collectible_Dolls")}
              className={`tab  tab2   ${
                activeTab == "Collectible_Dolls" ? "  bg-gray-950 text-black underline underline-offset-8" : ""
              }`}
            >
              Collectible Dolls
            </div>
            <div
              onClick={() => handleTabClick("Interactive_Dolls")}
              className={`tab  tab2   ${
                activeTab == "Interactive_Dolls" ? " bg-gray-950 text-black underline underline-offset-8" : ""
              }`}
            >
             Interactive Dolls
            </div>
            <div
              onClick={() => handleTabClick("Fashion_Dolls")}
              className={`tab  tab2   ${
                activeTab == "Fashion_Dolls" ? " bg-gray-950 text-black underline underline-offset-8" : ""
              }`}
            >
              Fashion Dolls
            </div>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default CategoryToys;