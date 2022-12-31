import React from 'react'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import profileImg from "../../images/profileImg.png"

const Profile = () => {
  return (
    <div className='profile'>
      <div className='component-header'>
        <h4><CgProfile />Profile</h4>
      </div>
      <div className='profile-img-container'>
        <img src={profileImg} alt="profile-img" className='profile-img' />
        <h4>Hey You!</h4>
      </div>
      <div className='info'>
        <h4>You're not signed in</h4>
        <p>Login or Signup to start shopping your desired item</p>
      </div>
      <Link to={"/login"} className="login-signup">Login or Signup</Link>
    </div>
  )
}

export default Profile
