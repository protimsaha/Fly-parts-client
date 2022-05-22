import React from 'react';

const Banner = () => {
    return (
        <div class="hero lg:px-12 h-[80vh] bg-base-100 mt-[-50]">
            <div class="hero-content flex-col lg:flex-row">
                <img src="https://s28490.pcdn.co/wp-content/uploads/2019/05/eng-vedeneyev.jpg" class=" rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;