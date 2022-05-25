import React from 'react';
import Items from '../Items/Items';
import Teams from '../Teams/Teams';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Review/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Teams></Teams>
        </div>
    );
};

export default Home;