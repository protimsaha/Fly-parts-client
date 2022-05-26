import React from 'react';
import Companies from '../Other/Companies';
import Offer from '../Other/Offer';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import DisplayReview from './DisplayReview';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Offer></Offer>
            <BussinessSummery></BussinessSummery>
            <DisplayReview></DisplayReview>
            <Companies></Companies>
            <Footer></Footer>
        </div>
    );
};

export default Home;