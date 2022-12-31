import React from 'react';

const ForgottenPsw = () => {
    return (
        <div className='signin'>
            <div className='signin-sub-header'>
                <h3>Never Stop Fashion</h3>
                <h4>Forgotten Password?</h4>
            </div>
            <div className='login-content'>
                <input type="email" name="email" placeholder='Email' />
                <button>Submit</button>
            </div>
        </div>
    );
}

export default ForgottenPsw;
