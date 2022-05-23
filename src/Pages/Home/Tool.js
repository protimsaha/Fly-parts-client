import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, img, ShortDes, minimumOr, available, ppu } = tool;
    const navigate = useNavigate()


    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img className='max-h-80 ' src={img} alt="Shoes" /></figure>
            <div className="p-5">
                <h2 className="text-2xl font-semibold text-slate-500">{name}</h2>
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
                <div className=" mt-5">
                    <button onClick={() => navigate(`/purchase/${_id}`)} className="btn text-xl mx-auto bg-gradient-to-r from-secondary to-primary items-center flex">place order</button>
                </div>
            </div>
        </div >
    );
};

export default Tool;