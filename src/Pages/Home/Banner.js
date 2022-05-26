import React from 'react';

const Banner = () => {
    return (
        <div className="hero lg:px-12 min-h-[60vh]  bg-base-100 ">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://s28490.pcdn.co/wp-content/uploads/2019/05/eng-vedeneyev.jpg" className=" rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl ml-8 font-bold uppercase">Fly parts</h1>
                    <p className="py-6 ml-8 shrink text-xl font-medium">Fly parts is a rekonowned aircraft engine manufracturing company among the world. We are producing the best engine parts from 1978. Its a trustworthy company to more than 70 companies.You can start your maintenance and manufracturing from now with us.</p>
                    <button className="ml-8 btn text-xl mx-auto bg-gradient-to-r from-secondary to-primary items-center flex">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;