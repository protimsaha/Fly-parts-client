import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pay = () => {
    const { payId } = useParams()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${payId}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [payId])

    return (
        <div class="card mx-auto my-10 w-96 bg-primary text-primary-content">
            <div class="card-body">
                <h2 className='text-4xl font-bold text-green-600'>Hello , {detail.name}</h2>
                <h2 class="card-title ">Pay for <span className='text-orange-600'>{detail.productName}</span></h2>
                <p className='text-2xl text-white'>Your total bill : <span className='text-black'> ${detail.cost}</span></p>
                <div class="card-actions justify-end">
                    <button class="btn">pay now</button>
                </div>
            </div>
        </div>
    );
};

export default Pay;