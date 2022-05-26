import React from 'react';

const Companies = () => {
    return (
        <div className='my-24'>
            <h2 className='text-5xl font-semibold text-slate-600 uppercase text-center my-10'>Some of Our Honurable Customer Companies</h2>
            <div className='grid grid-cols-1 gap-x-10 lg:grid-cols-4 md:grid-cols-2 px-6'>

                <div class="card my-5  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='rounded-xl' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/850px-Emirates_logo.svg.png" alt="" />
                        <p className='text-2xl text-slate-500 text-center'>Emirates Airline</p>
                    </div>
                </div>
                <div class="card my-5  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='rounded-xl' src="https://qph.fs.quoracdn.net/main-qimg-04504ec65a762cf005745543244b65f7" alt="" />
                        <p className='text-2xl text-slate-500 text-center'>Qatar Airline</p>
                    </div>
                </div>
                <div class="card my-5  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='rounded-xl' src="https://www.mroglobal-online.com/wp-content/uploads/2017/04/Etihad-Airways-Engineering-600x630.jpg" alt="" />
                        <p className='text-2xl text-slate-500 text-center'>Etihad Airline</p>
                    </div>
                </div>
                <div class="card my-5  bg-base-100 shadow-xl">
                    <div class="card-body">
                        <img className='rounded-xl' src="https://www.contactnumbers.in/wp-content/uploads/2015/07/American-Airlines-Logo2.jpg" alt="" />
                        <p className='text-2xl text-slate-500 text-center'>America Airline</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companies;