import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const { GoogleSignIn, user } = UserAuth();

    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignIn()
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null) {
            navigate('/account')
        }
    }, [user]);

    return (
        <div className='d-flex flex-column align-items-center justify-content-center vh-100'
            style={{ backgroundImage: "url('https://plexcollectionposters.com/images/2021/05/16/background-images-for-login-page3bc68c53b0db224b.jpg')" }}>
            <h2 style={{ color: 'white' }}>Sign in</h2>
            <br />
            <div className=' py-4'>
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
        </div>
    )
}

export default Signup;