import React from 'react';

const Offer = () => {
    return (
        <div>
            <div class="hero lg:px-12 min-h-[60vh]  bg-base-100 ">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 class="text-5xl font-bold uppercase text-orange-500 ">May offer</h1>
                        <p class="py-6 shrink text-3xl text-slate-600">Our lucky customer will get a free service from us</p>
                        <p className='text-xl shrink '>In May ,2022 we have decleared a offer to our honurable cutomers . Our lucky customers will get free services by our skilled engineers. Also every customer will get free parts mounted. So grab now!</p>
                        <button class="btn btn-accent mt-3">Grab now</button>
                    </div>
                    <img className='lg:w-1/2  rounded-lg' src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2019/11/0/0/iStock-Aviation-mechanic.jpg?ve=1&tl=1" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Offer;