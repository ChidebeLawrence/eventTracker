import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <form className='signin'>
            <div className='signin-sub-header'>
                <h3>Experience Fashion Now!</h3>
            </div>
            <div className='login-content'>
                <input type="email" name="email" placeholder='Email' />
                <input type="password" name="password" placeholder='Password' />
                <input type="password" name="password" placeholder='Repeate Password' />
                <button>Signin</button>
            </div>
            <div className='alt'>
                <p>Already have an account? <Link to={"/login"}>Login</Link></p>
            </div>
            <p>By countinuing you agree to <Link href='#'>Terms & Condition</Link> and <Link href='#'>Privacy Policy</Link></p>
        </form>
    );
}

export default Signup;
