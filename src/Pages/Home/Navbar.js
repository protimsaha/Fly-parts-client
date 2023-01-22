import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../Auth/Firebase.init';

const Navbar = ({ children }) => {
    const [user] = useAuthState(auth)

    return (
        <div className="drawer drawer-end ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-100 ">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Dashboard</label>
                    <Link to='/' className="flex-1 text-2xl font-bold px-2 mx-2 text-secondary">FLY PARTS</Link>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-3">
                            <li><NavLink className='rounded-lg ' to='/'>Home</NavLink></li>
                            <li><NavLink className='rounded-lg ' to='/blog'>Blog</NavLink></li>
                            <li><NavLink className='rounded-lg ' to='/portfolio'>Portfolio</NavLink></li>
                            {user && <li><Link className='rounded-lg' to="/dashboard">Dashboard</Link></li>}
                            {user ? <div className='flex'> <button
                                onClick={() => {
                                    signOut(auth)
                                    localStorage.removeItem('accessToken')
                                }}
                                className="btn btn-ghost">Logout</button>
                                {user && <p className='ml-2 text-xl font-medium mt-1 p-1 text-green-600'>{user.displayName}</p>}
                            </div> :
                                <li> <NavLink className='rounded-lg ' to='/login'>Login</NavLink></li>
                            }

                        </ul>
                    </div>

                </div>

                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">

                    <li><NavLink className='rounded-lg ' to='/'>Home</NavLink></li>
                    <li><NavLink className='rounded-lg ' to='/blog'>Blog</NavLink></li>
                    <li><NavLink className='rounded-lg ' to='/portfolio'>Portfolio</NavLink></li>
                    {user && <li><Link className='rounded-lg' to="/dashboard">Dashboard</Link></li>}
                    {user ? <div className='flex'> <button
                        onClick={() => {
                            signOut(auth)
                            localStorage.removeItem('accessToken')
                        }}
                        className="btn btn-ghost">Logout</button>
                        {user && <p className='ml-2 text-xl font-medium mt-1 p-1 text-green-600'>{user.displayName}</p>}
                    </div> :
                        <li> <NavLink className='rounded-lg ' to='/login'>Login</NavLink></li>
                    }

                </ul>

            </div>
            <div className="navbar-">
                <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden">Dashboard</label>
            </div>
        </div>
    );
};

export default Navbar;