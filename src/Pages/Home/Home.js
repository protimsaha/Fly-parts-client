import React from 'react';
import Banner from './Banner';
import BussinessSummery from './BussinessSummery';
import DisplayReview from './DisplayReview';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BussinessSummery></BussinessSummery>
            <DisplayReview></DisplayReview>
        </div>
    );
};

export default Home;