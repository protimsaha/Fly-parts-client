import React from 'react';

const Tool = ({ tool }) => {
    const { name, img, ShortDes, minimumOr, available, ppu } = tool
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img className='max-h-80 ' src={img} alt="Shoes" /></figure>
            <div class="p-5">
                <h2 class="text-2xl font-semibold text-slate-500">{name}</h2>
                <p>{ShortDes}</p>
                <div className='flex text-xl font-semibold  justify-between mt-3'>
                    <p>Price per unit: </p>
                    <p>{ppu}</p>
                </div>
                <div className='flex text-xl font-semibold justify-between  mt-3'>
                    <p>Minimum Order:</p>
                    <p>{minimumOr}</p>
                </div>
                <div className='flex text-xl font-semibold  justify-between mt-3'>
                    <p>Available now:</p>
                    <p>{available}</p>
                </div>
                <div class=" mt-5">
                    <button class="btn block mx-auto bg-gradient-to-r from-secondary to-primary ">place order</button>
                </div>
            </div>
        </div >
    );
};

export default Tool;