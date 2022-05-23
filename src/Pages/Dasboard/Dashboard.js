import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
// import useAdmin from '../../../Hooks/useAdmin';
// import auth from '../../Auth/firebase.init';

const Dasboard = () => {
    // const [user] = useAuthState(auth)
    // const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile min-h-[80vh]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h1 className='text-4xl font-bold text-center text-gray-600'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Dashboard</Link></li>
                    <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                    <li><Link to='/dashboard/addReview'>Add a Review</Link></li>
                    <li><Link to='/dashboard/my-profile'>My Profile</Link></li>

                    {/* {admin && <>
                        <li><Link to='/dashboard/users'>All users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                        <li><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>
                    </>} */}
                </ul>

            </div>
        </div>
    );
};

export default Dasboard;