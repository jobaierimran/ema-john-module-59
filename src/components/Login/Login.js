import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const location = useLocation()
  const from = location?.state?.from?.pathname || '/'

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate()

  const handleEmailBlur = event => {
    setEmail(event.target.value)
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }

  if(user){
    navigate(from, {replace: true})
  }

  const handleUserSignIn= event => {
    event.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
          </div>
          <p style={{'color': 'red'}}>{error?.message}</p>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-john?
          <Link className="form-link" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="border-google">
          <div
            style={{ border: '1px solid gray', width: '145px', height: '0px' }}
          ></div>
          <p style={{ padding: ' 0px 20px' }}>or</p>
          <div
            style={{ border: '1px solid gray', width: '145px', height: '0px' }}
          ></div>
        </div>
      <button className='google-submit'> Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
