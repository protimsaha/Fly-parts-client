import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const updateShipping = id => {
        axios.put(`http://localhost:5000/orders/${id}`)
            .then(res => console.log(res))
    }


    return (
        <div class="overflow-x-auto my-10 mx-auto w-4/5 ">
            <h2 className='text-3xl text-primary text-center'>Manage All Orders</h2>
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Order Email</th>
                        <th>Product Name</th>
                        <th>Shipment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order, index) => <tr key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order.email}</td>
                            <td>{order.productName}</td>
                            <td>{(order.paid === true) ? <button onClick={() => updateShipping(order._id)} className='btn btn-sm'>Pending</button> : <p>Unpaid</p>}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;