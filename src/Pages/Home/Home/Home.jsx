import React from 'react';
import Banner from '../Banner/Banner';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToys from '../CategoryToys/CategoryToys';
import ImageGallery from '../ImageGallery/ImageGallery';
import Review from '../Review/Review';
import NewsLetter from '../NewsLetter/NewsLetter';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
    useTitle('home')
    return (
        <div>
            <Banner></Banner>
            <ImageGallery></ImageGallery>
             <CategoryToys></CategoryToys>
             <Review></Review>
             <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;