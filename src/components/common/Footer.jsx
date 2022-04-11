import React from 'react'
import Play from '../../assets/images/play.svg';
import Tw from '../../assets/images/tw.svg';
import Fb from '../../assets/images/fb.svg';
import Yt from '../../assets/images/yt.svg';

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
        <div className="wrap">
            <div className="ftr-top">
                <div className="icon-left">
                    <img src={Play} alt=""/>
                </div>
                <div className="right-social">
                    <img src={Tw} alt="Twitter"/>
                    <img src={Fb} alt="Facebook"/>
                    <img src={Yt} alt="Youtube"/>
                </div>
            </div>
            <div className="line"></div>
            <div className="ftr-bottom">
                <div className="left-ftr">
                copyright © 2022 pcbplay
                </div>
                <div className="right-ftr">
                    <ul>
                        <li><Link to='/'>sitemap</Link></li>
                        <li><Link to='/privacy-policy'>policies</Link></li>
                        <li><Link to='/get-in-touch'>email us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer;
