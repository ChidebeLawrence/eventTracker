import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa'

const Login = () => {
    return (
        <div>
            <form className='signin'>
                <div className='signin-sub-header'>
                    <h3>Discover Shoping.</h3>
                </div>
                <button><FaFacebook /> Continue with Facebook</button>
                <button><FaTwitter /> Continue with Twitter</button>
                <button><FaGoogle /> Continue with Google+</button>
                <p>Or sign in manually</p>
                <div className='login-content'>
                    <input type="text" name="username" placeholder='Username' />
                    <input type="password" name="password" placeholder='Password' />
                    <button>Login</button>
                </div>
                <div className='alternative'>
                    <Link to={"/forgottenpsw"}>Forgotten Password?</Link>
                    <Link to={"/signup"}>Signup</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
