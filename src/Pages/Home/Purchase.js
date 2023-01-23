import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../Auth/Firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const [order, setOrder] = useState('')
    const [toolDetail, setToolDetail] = useState({})
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        const url = `https://fly-parts-server.vercel.app/tools/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setToolDetail(data))
    }, [id])

    let orderNumber;
    const orderQuantity = event => {
        orderNumber = event.target.value
        if (Number(orderNumber) < Number(toolDetail.minimumOr)) {
            return setDisable(false)
        }
        else if (Number(orderNumber) < Number(toolDetail.minimumOr)) {
            toast.error(`You cant make order than ${toolDetail.minimumOr}`)
        }
        else if (Number(orderNumber) > Number(toolDetail.available)) {
            return setDisable(false)

        }
        else {
            setOrder(orderNumber)
            setDisable(true)
        }
    }


    const setPhone = event => {
        setPhoneNumber(event.target.value)
    }
    const customerAddress = event => {
        setAddress(event.target.value)
    }


    const purchaseNow = () => {
        const purchaseData = {
            name: user.displayName,
            email: user.email,
            phone: phoneNumber,
            address: address,
            productName: toolDetail.name,
            orderValue: order,
            cost: order * toolDetail.ppu,
            status: 'unpaid'
        }
        axios.post('https://fly-parts-server.vercel.app/orders', purchaseData)
            .then(res => {
                toast.success('Purchaed order complete')
                setPhoneNumber('')
                setAddress('')

                console.log(res)
            })
    }

    return (
        <div className='lg:w-1/2 sm:w-full sm:px-4 mx-auto my-14 shadow-lg p-10'>
            <h2 className='text-center uppercase text-3xl text-primary font-semibold '>confirm your purchase</h2>
            <input type="text" value={user.displayName} readOnly className="text-xl input input-bordered w-full my-2" />
            <input type="text" value={user.email} className="input text-xl input-bordered w-full my-2" />
            <input type="text" onBlur={setPhone} placeholder="Phone Number" className="input w- input-bordered w-full my-2" required />
            <textarea onBlur={customerAddress} type="text" placeholder="Address" className="input w- input-bordered w-full my-2" required />
            <input type="text" value={toolDetail.name} className="input text-xl input-bordered w-full my-2" />

            <div className='flex justify-between text-xl'>
                <p>Available quantity:</p>
                <p>{toolDetail.available}</p>
            </div>
            <div className='flex justify-between text-xl'>
                <p>Minimum order : </p>
                <p>{toolDetail.minimumOr}</p>
            </div>
            <div className='flex justify-between text-xl'>
                <p>Price per unit: </p>
                <p>{toolDetail.ppu}</p>
            </div>
            <div className='flex justify-between text-xl'>
                <p className='mt-2'>Order quantity: </p>
                <input onChange={orderQuantity} type="text" placeholder='Order quantity' className="input w- input-bordered w-40 my-2" />
            </div>
            <button disabled={!disable} onClick={purchaseNow} className='btn text-xl mx-auto bg-gradient-to-r from-secondary to-primary items-center flex mt-8'>Purchase now</button>
        </div>
    );
};

export default Purchase;