// import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) => <User refetch={refetch} index={index} user={user} key={user._id}></User>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllUsers;