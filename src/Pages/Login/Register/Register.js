import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      if(loading || updating){
          return <Loading></Loading>
      }

    const onSubmit = async data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
       await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
          alert('Updated profile');
    }
    return (
        <div>
            <h1 style={{color: 'tomato'}} className='text-center mt-5'>Please Register</h1>
            <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-2 rounded' type="text" {...register("name")} placeholder="Name" required />
                <input className='my-2 rounded' type="email" {...register("email")} placeholder="Email" required />
                <input className='my-2 rounded' type="password" {...register("password")} placeholder="Password" required />
                <input style={{backgroundColor: 'tomato'}} className='d-block w-50 mx-auto rounded' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an Account? <Link to="/login" className='pe-auto text-decoration-none text-danger'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;