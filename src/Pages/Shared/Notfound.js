import React from 'react';
import image from '../../image/404.webp'

const Notfound = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-96' src={image} alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">The page you are searching for is not found!</h1>
                        <h1 class="text-5xl text-center font-bold text-red-600">404!</h1>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notfound;