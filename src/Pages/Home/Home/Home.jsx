import React from 'react';
import Banner from '../Banner/Banner';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToys from '../CategoryToys/CategoryToys';
import ImageGallery from '../ImageGallery/ImageGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
             <CategoryToys></CategoryToys>
        </div>
    );
};

export default Home;