import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const imageStorageKey = '02ac56fd7f18d837b23894d27b8c36fb'

    const onSubmit = data => {
        console.log(data)
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        name: data.name,
                        ppu: data.ppu,
                        minimumOr: data.minimumOr,
                        available: data.available,
                        ShortDes: data.ShortDes,
                        img: img
                    }
                    console.log(tool)
                    fetch('https://fly-parts-server.vercel.app/tools', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added Successfully')
                                reset()
                            } else {
                                toast.error("Can't insert the Product")
                            }
                        })
                }
            })
    };


    return (
        <div className='lg:w-1/2 sm:w-full sm:px-4 mx-auto my-14 shadow-lg p-10 mt-40 w-full'>
            <h2 className="text-3xl text-center text-accent ">Add New Products</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Product name</span>
                    </label>
                    <input
                        type="name"
                        placeholder="Product name"
                        className="input input-bordered w-full "
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Product price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product price"
                        className="input input-bordered w-full "
                        {...register("ppu", {
                        })}
                    />

                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Product Quantity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Quantity"
                        className="input input-bordered w-full "
                        {...register("available"
                        )}
                    />

                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Product minimum order</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product minimum order"
                        className="input input-bordered w-full "
                        {...register("minimumOr", {

                        })}
                    />

                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Product short description</span>
                    </label>
                    <textarea
                        type="ShortDes"
                        placeholder="Product short description"
                        className="input input-bordered w-full "
                        {...register("ShortDes", {

                        })}
                    />

                </div>


                <div className="mx-auto form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Image</span>
                    </label>
                    <input
                        type="file"
                        className="input  w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn text-xl mx-auto bg-gradient-to-r from-secondary to-primary items-center flex mt-8' type="submit" value='Submit' />

            </form>
        </div>
    );
};


export default AddProduct;