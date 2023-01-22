import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Auth/Firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)

    const addReview = event => {
        event.preventDefault()
        const review = {
            displayName: user.displayName,
            location: event.target.location.value,
            review: event.target.review.value
        }
        axios.post('https://fly-parts-server-40rrtmcya-protimsaha.vercel.app/reviews', review)
            .then(res => console.log(res))
    }
    return (
        <div>
            <h1 className='text-5xl text-center text-secondary font-semibold mt-8'>Please give us a Review</h1>
            <form onSubmit={addReview} className='lg:w-1/2 sm:w-full sm:px-4 mx-auto my-14 shadow-lg p-10 ' >
                <input type="text" value={user.displayName} className="input input-bordered w-full my-2" />
                <input type="text" name='location' placeholder="Your location" className="input input-bordered w-full my-2" />
                <textarea name='review' type="text" placeholder="Your feedback" className="input input-bordered w-full my-2" />
                <input className='btn text-xl mx-auto bg-gradient-to-r from-secondary to-primary items-center flex' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddReview;