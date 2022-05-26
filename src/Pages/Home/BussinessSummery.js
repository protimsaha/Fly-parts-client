import React from 'react';

const BussinessSummery = () => {
    return (
        <div className='my-32  z-auto'>
            <div className='my-10'>
                <h1 className='text-5xl font-semibold text-center uppercase text-primary'>Our business summery</h1>
                <h2 className='text-2xl text-success uppercase text-center mt-3'>here is our connections with our customers</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className='flex col-span-1 items-center justify-center flex-col'>
                    <img className='w-24' src="https://static.thenounproject.com/png/243386-200.png" alt="" />
                    <p className='text-4xl font-bold text-info'>80+</p>
                    <p className='text-primary text-xl'>Countries</p>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <img className='w-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Vmjwlass_4Bgh6LgxHpki9UP2qtqjScx7PuDIv9Mqk5fycFsBMck-QPWOLPv8kZzFS4&usqp=CAU" alt="" />
                    <p className='text-4xl font-bold text-info'>550+</p>
                    <p className='text-primary text-xl'>Complete Projetcs</p>
                </div>

                <div className='flex items-center justify-center flex-col'>
                    <img className='w-24 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Noun_Project_people_icon_3376085.svg/1024px-Noun_Project_people_icon_3376085.svg.png" alt="" />
                    <p className='text-4xl font-bold text-info'>500+</p>
                    <p className='text-primary text-xl'>Happy Clients</p>
                </div>
                <div className='flex items-center justify-center flex-col'>
                    <img className='w-24' src="https://static.vecteezy.com/system/resources/previews/002/238/477/original/feedback-icon-free-vector.jpg" alt="" />
                    <p className='text-4xl font-bold text-info'>650+</p>
                    <p className='text-primary text-xl'>Feedbacks</p>
                </div>
            </div>
            <div className='mx-auto flex justify-around mt-5 rounded-lg shadow-lg w-11/12 h-28'>
                <div>
                    <h1 className='text-4xl font-semibold text-secondary  pl-7'>Have any query about us?</h1>
                    <h2 className='text-2xl text-slate-600 font-medium pl-7 mt-3'>Feel free to contact us now</h2>
                </div>
                <div>
                    <button className='btn text-xl mx-auto bg-gradient-to-r from-secondary to-primary items-center flex mt-5'>
                        Contact now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BussinessSummery;