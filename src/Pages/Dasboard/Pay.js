import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L17h5A9ADacrTBOu8OkUEsajGKj2xpPLAUzw2GUdxyMN7Dv8nMKhctGUb4UobYtIGsMWqcSH0x3iiqMDDRCSM0r00RpYL86Gs');

const Pay = () => {
    const { payId } = useParams()
    const [detail, setDetail] = useState({})

    useEffect(() => {
        fetch(`https://fly-parts-server-40rrtmcya-protimsaha.vercel.app/orders/${payId}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [payId])

    return (
        <div class="card mx-auto my-10 w-1/2 bg-primary text-primary-content">
            <div class="card-body">
                <h2 className='text-4xl font-bold text-green-600'>Hello , {detail.name}</h2>
                <h2 class="card-title ">Pay for <span className='text-orange-600'>{detail.productName}</span></h2>
                <p className='text-2xl text-white'>Your total bill : <span className='text-black'> ${detail.cost}</span></p>
                <Elements stripe={stripePromise}>
                    <CheckoutForm detail={detail} />
                </Elements>
            </div>
        </div>
    );
};

export default Pay;