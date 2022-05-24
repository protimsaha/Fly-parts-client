import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from './Firebase.init';
import Loading from '../Shared/Loading';
import { useForm } from 'react-hook-form';
import useToken from '../../hooks/useToken';


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [email, setEmail] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const [token] = useToken(googleUser || user)
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }

    }, [navigate, from, token])
    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || gError) {
        signInError = <p>{error?.message || gError?.message}</p>
    }

    const onSubmit = (data, event) => {
        signInWithEmailAndPassword(data.email, data.password)
        setEmail(data.email)
        event.target.reset()
    };

    return (
        <div className='flex justify-center items-center my-20 h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-xl">Login</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password should be 6 charecters or longer'
                                    }
                                })}
                            />
                            <label className='label'>
                                <span className="label-text"> Forgote password?
                                </span>
                                <p role='button' className='text-secondary ml-2' onClick={async () => {
                                    await sendPasswordResetEmail(email)
                                    toast('Password Reset email sent')
                                }}>Reset your password</p>
                            </label>

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        <p className='text-red-500'>{signInError}</p>
                        <input className='btn w-full mb-3 max-w-xs' type="submit" value='Login' />
                        <p>Don't have an account? <Link className=' text-secondary' to='/signup'>Sign Up now</Link></p>
                    </form>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;