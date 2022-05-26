import React from 'react';
import appstore from '../../image/playstore.jpg'
import './Footer.css'


const Footer = () => {
    return (
        <div className='bg-accent py-5 px-5 foot' >
            <h1 className='text-5xl font-semibold text-center my-10 font-serif text-orange-600 border-white rounded-md'>FLY PARTS</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='my-5'>
                    <h1 className='text-3xl uppercase bg-yellow-500 font-bold p-1 mr-20'>Explore US</h1>
                    <p className='text-2xl font-mono text-yellow-500'>Company</p>
                    <p className='text-2xl font-mono text-yellow-500'>Metal supplier</p>
                    <p className='text-2xl font-mono text-yellow-500'>Countries</p>
                    <p className='text-2xl font-mono text-yellow-500'>Coustomer Company</p>
                    <p className='text-2xl font-mono text-yellow-500'>All features</p>
                </div>
                <div className='my-5'>
                    <h1 className='text-3xl uppercase bg-yellow-500 font-bold p-1 mr-20'>iNTERNATIONAL OFFICES</h1>
                    <p className='text-2xl font-mono text-yellow-500'>Washington</p>
                    <p className='text-2xl font-mono text-yellow-500'>Toronto</p>
                    <p className='text-2xl font-mono text-yellow-500'>Mumbai</p>
                    <p className='text-2xl font-mono text-yellow-500'>Mexico</p>
                    <p className='text-2xl font-mono text-yellow-500'>Singapore</p>
                </div>
                <div className='my-5'>
                    <h1 className='text-2xl uppercase  bg-yellow-500 font-bold p-1  mr-20 '>Contact US</h1>
                    <h2 className='text-white text-3xl font-medium'>Get our official app now</h2>
                    <img className='w-60  mt-5 rounded-md' src={appstore} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;