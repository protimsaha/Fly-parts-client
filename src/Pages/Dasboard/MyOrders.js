import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Auth/Firebase.init';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email])

    return (
        <div class="overflow-x-auto my-10 mx-auto w-4/5 ">
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product Name</th>
                        <th>Payment Status</th>
                        <th>Cancel order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders?.map((order, index) => <tr key={index}>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.productName}</td>
                            <td>
                                {
                                    order.status === 'unpaid' && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-sm btn-success'>pay</button></Link>
                                }

                            </td>
                            <td>
                                <button className='btn btn-sm btn-success'>Cancel</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;