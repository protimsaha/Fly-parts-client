import React from 'react';
import Companies from '../Other/Companies';
import Offer from '../Other/Offer';
import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import DisplayReview from './DisplayReview';
import ReactLeaflet from './ReactLeaflet/ReactLeaflet';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Offer></Offer>
            <BussinessSummery></BussinessSummery>
            <DisplayReview></DisplayReview>
            {/* <ReactLeaflet></ReactLeaflet> */}
            <Companies></Companies>
        </div>
    );
};

export default Home;