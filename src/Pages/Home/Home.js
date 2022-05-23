import React from 'react';
import Teams from '../Teams/Teams';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Review from './Review/Review';
import Reviews from './Review/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Teams></Teams>
            <Reviews></Reviews>
            <Review></Review>
        </div>
    );
};

export default Home;