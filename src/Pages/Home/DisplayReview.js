import React from 'react';
import useReviews from '../Shared/useReviews';

const DisplayReview = () => {
    const [reviews] = useReviews()
    return (
        <div className='my-20'>
            <h2 className='text-5xl font-semibold text-secondary text-center my-10'>Take a look on our cutomers opinions</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-12'>
                {reviews.map(review => <>
                    <div class="card w-96 bg-base-100 shadow-xl mt-8">
                        <div class="card-body">
                            <div className='flex items-center'>
                                <div class="avatar">
                                    <div class="w-24 mask mask-hexagon">
                                        <img src={review.profile} alt='' />
                                    </div>
                                </div>
                                <p className='text-xl text-secondary'>{review.location}</p>
                            </div>
                            <div>
                                <p>{review.review}</p>
                            </div>
                        </div>
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

export default DisplayReview;