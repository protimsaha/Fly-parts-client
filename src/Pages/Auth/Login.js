import React from 'react';

const Login = () => {
    return (
        <div className='min-h-[50vh]'>
            <div className='w-96 mx-auto shadow-2xl p-10 rounded-2xl'>
                <h1 className='text-2xl font-bold text-center'>Login</h1>
                <div class="form-control w-full max-w-xs mt-3">
                    <label class="label">
                        <span class="label-text text-xl font-semibold">Email</span>
                    </label>
                    <input type="text" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs mt-3">
                    <label class="label">
                        <span class="label-text text-xl font-semibold">Password</span>
                    </label>
                    <input type="text" class="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </div>
        </div>
    );
};

export default Login;