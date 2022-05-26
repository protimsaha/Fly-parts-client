import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../Auth/Firebase.init';

const Dasboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'></Link>My Dashboard</li>
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
                            <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
                            <li><Link to='/dashboard/allorders'>All Orders</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dasboard;