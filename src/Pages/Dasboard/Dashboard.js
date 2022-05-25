import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../Auth/Firebase.init';

const Dasboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile min-h-[80vh]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h1 className='text-4xl font-bold text-center text-gray-600'>Welcome to your Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Dashboard</Link></li>
                    {!admin &&
                        <>
                            <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                            <li><Link to='/dashboard/addReview'>Add a Review</Link></li>
                        </>
                    }
                    <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
                    {admin &&
                        <>
                            <li><Link to='/dashboard/all-users'>All Users</Link></li>
                            <li><Link to='/dashboard/addProduct'>Add product</Link></li>
                            <li><Link to='/dashboard/manageProduct'>Manage products</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dasboard;