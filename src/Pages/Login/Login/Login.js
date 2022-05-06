import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;

    let from = location.state?.from?.pathname || "/";

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error || resetError) {
        errorMessage = error.message;
    }

    const onSubmit = async data => {
        const email = data.email;
        const password = data.password;
        await signInWithEmailAndPassword(email, password);
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div>
            <h1 style={{ color: 'tomato' }} className='text-center mt-5'>Please Login</h1>
            <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-2 rounded' type="email" {...register("email")} placeholder="Email" required />
                <input className='my-2 rounded' type="password" {...register("password")} placeholder="Password" required />
                <p className='text-danger'>{errorMessage}</p>
                <input style={{ backgroundColor: 'tomato' }} className='d-block w-50 mx-auto rounded' type="submit" value="Login" />
            </form>
            <p className='text-center'>New to Fruits Warehouse? <Link to="/register" className='pe-auto text-decoration-none text-danger'>Please Register</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;