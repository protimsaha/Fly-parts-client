import useReviews from '../Shared/useReviews';

const DisplayReview = () => {
    const [reviews] = useReviews()

    return (
        <div className='my-20'>
            <h2 className='text-5xl font-semibold text-secondary text-center my-10'>Take a look on our cutomers opinions</h2>
            <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 px-12'>
                {reviews.map(review =>
                    <div key={review._id}>
                        <div className="card w-96 bg-base-100 shadow-xl mt-8">
                            <div className="card-body">
                                <div className='flex items-center'>
                                    <h1>{review.displayName}</h1>
                                    <p className='text-xl text-secondary'>{review.location}</p>
                                </div>
                                <div>
                                    <p>{review.review}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

};


export default DisplayReview;