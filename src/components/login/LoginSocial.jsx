import React from 'react'
import Google from '../../assets/images/google.png';
import TW from '../../assets/images/twitter.png';
import FB from '../../assets/images/facebook.png';

export const LoginSocial = () => {
    return (
        <>
            <div className="icon-wrap">
                <a href="http://">
                    <img src={Google} alt="" />
                </a>
                <a href="http://">
                    <img src={TW} alt="" />
                </a>
                <a href="http://">
                    <img src={FB} alt="" />
                </a>
            </div>
            <div className="devider">
                <div className="dev"></div> or <div className="dev"></div>
            </div>
        </>
    )
}

export default LoginSocial;
