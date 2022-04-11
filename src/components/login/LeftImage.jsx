import React from 'react'
import Product from '../../assets/images/item.png';
import Logo from '../../assets/images/logo.svg';
import {
    Link
} from "react-router-dom";

export const LeftImage = () => {
    return (
        <>
            <div className="img-wrap">
                <Link to="/home">
                    <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="main-img">
                <img src={Product} alt="" />
            </div>
            <h1>Easiest way to design a board </h1>
        </>
    )
}

export default LeftImage;