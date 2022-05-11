import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorMessage;

    if(loading){
        return <Loading></Loading>
    }
    if(error){
        errorMessage = error.message
    }

    return (
        <div>
            <div className='d-flex justifu-content-center align-items-center w-50 mx-auto'>
                <div style={{ height: '2px', backgroundColor: 'tomato' }} className='w-50'></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: '2px', backgroundColor: 'tomato' }} className='w-50'></div>
            </div>
            <p className='text-danger'>{errorMessage}</p>
            <button  style={{backgroundColor: 'tomato' }} onClick={() => signInWithGoogle()} className='rounded d-block mx-auto'>Sing in with Google</button>
        </div>
    );
};

export default SocialLogin;