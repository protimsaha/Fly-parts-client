import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch }) => {
    const { displayName, email } = user

    const updateRole = () => {

        fetch(`https://fly-parts-server-40rrtmcya-protimsaha.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully made an admin')
                refetch()
            })
    }

    return (
        <tbody>
            <tr>
                <th>{index + 1}</th>
                <td>{displayName}</td>
                <td>{email}</td>
                <td>{user.role !== 'admin' ? <button onClick={updateRole} className="btn btn-xs">Make admin</button> : <button className='btn btn-xs'>Admin</button>}</td>
            </tr>
        </tbody>
    );
};

export default User;