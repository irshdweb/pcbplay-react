import React, {useContext} from 'react';
import Container from '@mui/material/Container';
import Desktopdata from '../components/design/Desktopdata';
import Mobiledata from '../components/design/Mobiledata';
import Sidepanel from '../components/design/Sidepanel';
import Eye from '../assets/images/eye-color.svg';
import Alert from '../components/common/Alert';

import {AlertContext} from '../helper/AlertContext';

import {
    Link
} from "react-router-dom";

export const Design = () => {

    const {showAlert} = useContext(AlertContext);

    return (
        <>
            <section className="alerttop">
                <Container maxWidth="lg">
                    <div className="alert-wrap">
                            {
                                showAlert? <Alert type='success' message="product added successfully to your cart"/> : null
                            }
                    </div>
                </Container>
            </section>
            <section className="design">
                <Container maxWidth="lg">
                    <div className="design-wrap">
                        <div className="main-menu">
                            <ul>
                                <li className="active">mcu</li>
                                <li>battery</li>
                                <li>sensor</li>
                                <li>interface</li>
                                <li>wireless</li>
                                <li>mix Signals</li>
                                <li>memory</li>
                                <li>motor Drivers</li>
                                <li>audio-v</li>
                            </ul>
                        </div>
                        <div className="right-link flex hide-on-mobile">
                            <img src={Eye} alt="Eye" /> view design architecture
                        </div>
                    </div>
                </Container>
                <Container maxWidth="lg">
                    <div className="design-wrap top-20 hide-on-mobile">
                        <div className="main-grid-header">
                            <div className="hd">part number

                            </div>
                            <div className="hd text-center">sub-category</div>
                            <div className="hd">
                                <div className="wrap-text">
                                    description
                                </div>
                            </div>
                            <div className="hd">manufacturer</div>
                            <div className="hd text-center price">price</div>
                            <div className="hd">add to cart</div>
                        </div>

                    </div>
                </Container>
                <Container maxWidth="lg">
                    <div className="design-wrap hide-on-mobile">
                        <div className="main-grid">
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                            <Desktopdata />
                        </div>
                        <div className="right-forms mt">
                            <Sidepanel />
                        </div>
                    </div>
                    <div className="mobile-wrap hide-on-desktop">
                        <Mobiledata />
                        <Mobiledata />
                        <Mobiledata />
                    </div>
                    <div className="drop-pop hide-on-desktop">
                        <img src={Eye} alt="Eye" /> view design architecture
                    </div>
                    <div className="mobile-wrap hide-on-desktop">
                        <Sidepanel />
                    </div>
                    <div className="bottom-btn-bar">
                        <Link to='/' className='primary outline'>back</Link>
                        <Link to='/buy-now' className='primary'>buy now</Link>
                    </div>
                </Container>
            </section>
        </>

    )
}
export default Design;