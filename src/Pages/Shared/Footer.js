import React from 'react';
import appstore from '../../image/playstore.jpg'


const Footer = () => {
    return (
        <div className='bg-accent py-5 px-5'>
            <h1 className='text-4xl font-semibold text-center my-10 border-white rounded-md'>FLY PARTS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='my-5'>
                    <h1 className='text-2xl uppercase bg-slate-400 text-white p-1 mr-20'>Explore US</h1>
                    <p className='text-xl'>Company</p>
                    <p className='text-xl'>Metal supplier</p>
                    <p className='text-xl'>Countries</p>
                    <p className='text-xl'>Coustomer Company</p>
                    <p className='text-xl'>All features</p>
                </div>
                <div className='my-5'>
                    <h1 className='text-2xl uppercase bg-slate-400 text-white p-1 mr-20'>iNTERNATIONAL OFFICES</h1>
                    <p className='text-xl'>Washington</p>
                    <p className='text-xl'>Toronto</p>
                    <p className='text-xl'>Mumbai</p>
                    <p className='text-xl'>Mexico</p>
                    <p className='text-xl'>Singapore</p>
                </div>
                <div className='my-5'>
                    <h1 className='text-2xl uppercase  bg-slate-400 text-white p-1  mr-20 '>Contact US</h1>
                    <h2 className='text-slate-600 text-3xl font-medium'>Get our official app now</h2>
                    <img className='w-60  mt-5 rounded-md' src={appstore} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;