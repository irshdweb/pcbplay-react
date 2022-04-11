import React from 'react';
import Thank from '../assets/images/thakyou.svg';
import Item from '../assets/images/cart-thumb.png';
import Location from '../assets/images/location.png';
import ThankM from '../assets/images/thankyou-mobile.svg';


export const Thankyou = () => {
    return (
        <section className="thank-you">
            <div className="succes-box">
                <img src={Thank} alt="Success" className='hide-on-mobile'/>
                <img src={ThankM} alt="Success" className='hide-on-desktop'/>
                <h2>Thank You</h2>
                <p>Your order has been received. A confirmation email has been sent to</p>
                <p><a href="mailto:admk@gmail.com">admk@gmail.com</a> </p>
            </div>
            <div className="info-box">
                <div className="item">
                    <p>project name</p>
                    <p>draft-1</p>
                </div>
                <div className="item">
                    <p>project id</p>
                    <p>123415465456</p>
                </div>
                <div className="item">
                    <p>email</p>
                    <p>admk@gmail.com</p>
                </div>
                <div className="item hide-on-mobile">
                    <p>date</p>
                    <p>November 1, 2021</p>
                </div>
                <div className="item">
                    <p>PAYMENT METHOD:</p>
                    <p>visa ending 4242</p>
                </div>
            </div>
            <div className="car-box-wrap mt-15">
                <div className="card-box-header">
                    <h5>cart summary</h5>
                </div>
                <div className="card-box-body p-0">
                    <div className="cart-list-wrap">
                        <div className="cart-item">
                            <div className="img-wrap">
                                <img src={Item} alt="item" /> <span>stm32h750vbt6</span>
                            </div>
                            <div className="img-desc">
                                mcu
                            </div>
                            <div className="img-desc">
                                qty 2
                            </div>
                            <div className="img-desc">
                                $11.70
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="img-wrap">
                                <img src={Item} alt="item" /> <span>stm32h750vbt6</span>
                            </div>
                            <div className="img-desc">
                                mcu
                            </div>
                            <div className="img-desc">
                                qty 2
                            </div>
                            <div className="img-desc">
                                $11.70
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="img-wrap">
                                <img src={Item} alt="item" /> <span>stm32h750vbt6</span>
                            </div>
                            <div className="img-desc">
                                mcu
                            </div>
                            <div className="img-desc">
                                qty 2
                            </div>
                            <div className="img-desc">
                                $11.70
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="img-wrap">
                                <img src={Item} alt="item" /> <span>stm32h750vbt6</span>
                            </div>
                            <div className="img-desc">
                                mcu
                            </div>
                            <div className="img-desc">
                                qty 2
                            </div>
                            <div className="img-desc">
                                $11.70
                            </div>
                        </div>
                        <div className="cart-item">
                            <div className="img-wrap">
                                <img src={Item} alt="item" /> <span>stm32h750vbt6</span>
                            </div>
                            <div className="img-desc">
                                mcu
                            </div>
                            <div className="img-desc">
                                qty 2
                            </div>
                            <div className="img-desc">
                                $11.70
                            </div>
                        </div>
                    </div>
                    <div className="total-bar">
                        <div className="location">
                            <img src={Location} alt="" />
                            Saint Marco 14, Rome, Rome, Nomentano - 559944   +390664220484
                        </div>
                        <div className="tot">
                            <span>
                                total
                            </span>
                            <span>$350.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Thankyou;
