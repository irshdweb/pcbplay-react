import React from 'react';
import Container from '@mui/material/Container';
import LeftImage from '../components/login/LeftImage';
import { useState } from "react";
import Password from '../components/common/Password';
import LoginSocial from '../components/login/LoginSocial';
import Logo from '../assets/images/logo.svg';
import CheckboxControl from '../components/common/CheckboxControl'
import {
    Link, useNavigate
} from "react-router-dom";

const Register = () => {

    const [username] = useState("jacob jones");
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
                <h2>register</h2>
                <p>Sign up with your socials or create an account.</p>
                <LoginSocial/>
                <form onSubmit={submitHandler}>
                  <div className="form-control">
                    <label>full name</label>
                    <input type="text" className="txt-control" defaultValue={username} />
                  </div>
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
                    <p>by signing up, you agree to the <Link to="/privacy-policy">terms of service and privacy policy</Link></p>
                  </div>
                  <button className="primary btn">sign up</button>
                </form>
                <div className="sign-pan">
                  already have an account?  <Link to='/'>login</Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )
}

export default Register;

