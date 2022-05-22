import React from 'react';

const Footer = () => {
    return (
        <div className='bg-accent py-5 px-5'>
            <h1 className='text-4xl font-semibold text-center my-10 border-white rounded-md'>FLY PARTS</h1>
            <div className='grid grid-cols-3 '>
                <div>
                    <h1 className='text-2xl uppercase bg-slate-400 text-white p-1 mr-20'>Explore US</h1>
                    <p className='text-xl'>Company</p>
                    <p className='text-xl'>Metal supplier</p>
                    <p className='text-xl'>Countries</p>
                    <p className='text-xl'>Coustomer Company</p>
                    <p className='text-xl'>All features</p>
                </div>
                <div>
                    <h1 className='text-2xl uppercase bg-slate-400 text-white p-1 mr-20'>iNTERNATIONAL OFFICES</h1>
                    <p className='text-xl'>Washington</p>
                    <p className='text-xl'>Toronto</p>
                    <p className='text-xl'>Mumbai</p>
                    <p className='text-xl'>Mexico</p>
                    <p className='text-xl'>Singapore</p>
                </div>
                <div>
                    <h1 className='text-2xl uppercase  bg-slate-400 text-white p-1  mr-20 '>Overview</h1>

                </div>
            </div>
        </div>
    );
};

export default Footer;