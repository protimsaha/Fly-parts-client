import useReviews from '../Shared/useReviews';

const DisplayReview = () => {
    const [reviews] = useReviews()

    return (
        <div className='container my-16'>
            <h2 className='text-5xl font-semibold text-slate-600 uppercase text-center my-10'>Take a look on our cutomers opinions</h2>
            <div className='grid grid-cols-1 gap-x-10 lg:grid-cols-3 md:grid-cols-2 px-12'>
                {reviews.map(review =>
                    <div key={review._id} className="">
                        <div className="card  bg-base-100 shadow-xl mt-8">
                            <div className="card-body">
                                <div className=' items-center'>
                                    <h1 className='text-3xl text-slate-600 font-medium'>{review.displayName}</h1>
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