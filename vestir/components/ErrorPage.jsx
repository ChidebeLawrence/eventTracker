import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h1>404 PAGE DOES NOT EXIST</h1>
      <p>Return to <Link to={"/"}>Home Page</Link></p>
    </div>
  );
}

export default ErrorPage;
