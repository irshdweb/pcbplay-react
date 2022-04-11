import React from 'react';
import CheckboxControl from '../components/common/CheckboxControl';
import { Link } from "react-router-dom";

const GetInTouch = () => {
    return (
        <section className="address-wrap-new get-in-touch">
            <div className="hdr">
                <a href='http://'>email us</a>
                <h1>Get in touch</h1>
                <span className="tagline">We’d love to hear from you. Please fill out this form.</span>
            </div>
            <div className="form-wrap">
                <div className="row-form">
                    <div className="form-control">
                        <label>first name</label>
                        <input type="text" className="txt-control" placeholder='john ' />
                    </div>
                    <div className="form-control">
                        <label>last name</label>
                        <input type="text" className="txt-control" placeholder='Doe' />
                    </div>
                </div>
                <div className="row-form">
                    <div className="form-control">
                        <label>email</label>
                        <input type="text" className="txt-control" placeholder='joe@gmail.com' />
                    </div>
                </div>
                <div className="row-form">
                    <div className="form-control">
                        <label>phone number</label>
                        <input type="text" className="txt-control" placeholder='+1 (555) 000-0000' />
                    </div>
                </div>
                <div className="row-form">
                    <div className="form-control">
                        <label>message</label>
                        <textarea className="txt-control area"></textarea>
                    </div>
                </div>
                <div className="terms">
                    <CheckboxControl id="privacy" />
                    <p>you agree to the <Link to="/privacy-policy">terms of service and privacy policy</Link> </p>
                </div>
                <button className="primary btn">send message</button>
            </div>
        </section>
    )
}

export default GetInTouch