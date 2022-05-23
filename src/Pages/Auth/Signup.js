import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import useToken from '../Shared/useToken';
import auth from './Firebase.init';


const Signup = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(googleUser || user)

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (token) {
        navigate(from, { replace: true });
    }
    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || gError) {
        signInError = <p>{error?.message || gError?.message || updateError.message}</p>
    }


    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    };

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center font-bold text-xl">Sign Up</h2>


                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Name</span>
                                </label>
                                <input
                                    type="name"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
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
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            <p className='text-red-500'>{signInError}</p>
                            <input className='btn w-full mb-3 max-w-xs' type="submit" value='Sign up' />
                            <p>Already have an account? <Link className=' text-secondary' to='/login'>Login now</Link></p>
                        </form>

                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline">Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
