import React from 'react';
import Container from '@mui/material/Container';
import LeftImage from '../components/login/LeftImage';
import LoginSocial from '../components/login/LoginSocial'
import { useState } from "react";

import Logo from '../assets/images/logo.svg';
import Password from '../components/common/Password';
import CheckboxControl from '../components/common/CheckboxControl'

import {
  Link, useNavigate
} from "react-router-dom";


const Login = () => {
  const [email] = useState("jacob.jones@example.com");
  const [password] = useState("123456");

  let history = useNavigate();

  const submitHandler =(e) =>{
    e.preventDefault()
    history("/home")
  }

  return (
    <section className="login">
      <Container maxWidth="lg">
        <div className="mobile-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="wrap">

          <div className="left-img">
            <LeftImage />
          </div>

          <div className="right-form">
            <h2>login</h2>
            <p>Sign in with your socials or create an account.</p>
            <LoginSocial/>
            <form onSubmit={submitHandler}>
              <div className="form-control">
                <label>email</label>
                <input type="text" className="txt-control" defaultValue={email} />
              </div>
              <div className="form-control">
                <label>password</label>
                <Password value={password}/>
              </div>
              <div className="terms">
                <CheckboxControl id="privacy"/>
                <p>by signing in, you agree to the <Link to="/privacy-policy">terms of service and privacy policy</Link></p>
              </div>
              <button className="primary btn">sign in</button>
            </form>
            <div className="sign-pan">
              don't have an account?  <Link to='/register'>signup</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Login;

