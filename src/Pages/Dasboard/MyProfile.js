import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Auth/Firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)

    const updateProfile = event => {
        event.preventDefault()

        const education = event.target.education.value
        const location = event.target.location.value
        const phone = event.target.phone.value
        const linkdin = event.target.linkdin.value

        const profile = {
            displayName: user.displayName,
            email: user.email,
            education: education,
            location: location,
            phone: phone,
            linkdin: linkdin
        }
        axios.put(`http://localhost:5000/user/:${user.email}`, profile)
            .then(res => console.log(res))
    }

    return (
        <div>
            <h1 className='text-5xl text-center text-secondary font-semibold mt-8'>Please Update Your Profile</h1>
            <form className='lg:w-1/2 sm:w-full sm:px-4 mx-auto my-14 shadow-lg p-10 ' onSubmit={updateProfile}>
                <input type="text" value={user?.displayName} className="input input-bordered w-full my-2 " />
                <input type="text" value={user.email} className="input input-bordered w-full my-2 " />
                <textarea type="text" name='education' placeholder="Education" className="input input-bordered w-full my-2 " />
                <textarea type="text" name='location' placeholder="Your location" className="input input-bordered w-full my-2 " />
                <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full my-2 " />
                <input type="text" name='linkdin' placeholder="Your linkdin profile link" className="input input-bordered w-full my-2 " />
                <input type="submit" className='btn text-xl mx-auto bg-gradient-to-r from-secondary to-primary items-center flex ' value="Update" />
            </form>
        </div>
    );
};

export default MyProfile;