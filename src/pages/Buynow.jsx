import React, { useState } from 'react';
import Plus from '../assets/images/plus.png';
import Stripe from '../assets/images/stripe.svg';
import Paypal from '../assets/images/paypal.svg';
import Info from '../assets/images/info.svg';
import Password from '../components/common/Password';
import CheckboxControl from '../components/common/CheckboxControl';
import Item from '../assets/images/cart-thumb.png';
import Eye from '../assets/images/eye-color.svg';

import {
    Link
} from "react-router-dom";

export const Buynow = () => {

    const [addr1, setaddr1] = useState(true);
    const [addr2, setaddr2] = useState(false);
    const [stripe, setstripe] = useState(true);


    const activeadd = (val) => {
        if (val === 1) {
            setaddr1(true);
            setaddr2(false);
        } else {
            setaddr1(false);
            setaddr2(true);
        }
    }

    const paytype = (e) => {
        let val = e.currentTarget.value;
        if (val === 'stripe') {
            setstripe(true)
        } else {
            setstripe(false)
        }
    }

    return (
        <section className="buy-now">
            <div className="container">
                <h3>You’re almost there...!</h3>
            </div>
            <div className="container">
                <div className="wrp">
                    <div className="left-wrap">
                        <div className="delivery-panel">
                            <h3>delivery address</h3>
                            <div className="address-wrap">
                                <div className={`address-box ${addr1 ? 'active' : ''}`} onClick={() => { activeadd(1) }}>
                                    <h4>John Paul</h4>
                                    <p>saint marco 14, Rome</p>
                                    <p>rome, nomentano - 559944</p>
                                    <p>mobile Number: +390664220484</p>
                                </div>
                                <div className={`address-box ${addr2 ? 'active' : ''}`} onClick={() => { activeadd(2) }}>
                                    <h4>John Paul</h4>
                                    <p>saint marco 14, Rome</p>
                                    <p>rome, nomentano - 559944</p>
                                    <p>mobile Number: +390664220484</p>
                                </div>
                            </div>
                            <div className="more-wrap">
                                <div className="btn primary more-btn">
                                    <img src={Plus} alt="plus" />
                                    add address
                                </div>
                            </div>
                        </div>
                        <div className="payment-method">
                            <h3>payment details</h3>
                            <div className="payment-type">
                                <div className="type">
                                    <input type="radio" name='type' value='stripe' onChange={paytype} />
                                    <img src={Stripe} alt="Stripe" />
                                    stripe
                                </div>
                                <div className="type">
                                    <input type="radio" name='type' value='paypal' onChange={paytype} />
                                    <img src={Paypal} alt="Paypal" />
                                    stripe
                                </div>
                            </div>
                            {
                                stripe ?
                                    <form>
                                        <div className="form-item">
                                            <div className="form-control">
                                                <label>card number</label>
                                                <input type="text" className="txt-control" placeholder='1234 1234 1234 1234' />
                                            </div>
                                        </div>
                                        <div className="form-item dbl">
                                            <div className="form-control">
                                                <label>expiry</label>
                                                <input type="text" className="txt-control" placeholder='MM / YY' />
                                            </div>
                                            <div className="form-control">
                                                <label>cvc</label>
                                                <input type="text" className="txt-control" placeholder='cvc' />
                                            </div>
                                        </div>
                                        <div className="form-item dbl">
                                            <div className="form-control">
                                                <label>country</label>
                                                <input type="text" className="txt-control" placeholder='United States' />
                                            </div>
                                            <div className="form-control">
                                                <label>postal code</label>
                                                <input type="text" className="txt-control" placeholder='90210' />
                                            </div>
                                        </div>
                                        <div className="form-item">
                                            <div className="form-control">
                                                <label>name on card</label>
                                                <input type="text" className="txt-control" placeholder='1234 1234 1234 1234' />
                                            </div>
                                        </div>
                                        <button className="primary btn">pay</button>
                                    </form>
                                    :
                                    <form >
                                        <div className="form-control">
                                            <label>email</label>
                                            <input type="text" className="txt-control" />
                                        </div>
                                        <div className="form-control">
                                            <label>password</label>
                                            <Password />
                                        </div>
                                        <div className="terms">
                                            <CheckboxControl id="privacy" />
                                            <p>stay logged in for fastest checkout<br />
                                                <a href="http://">not recommended on shared devices</a> </p>
                                        </div>
                                        <button className="primary btn">sign in</button>
                                    </form>
                            }

                        </div>
                        <div className="more-wrap btm">
                            <div className="btn primary more-btn">
                                <img src={Plus} alt="plus" />
                                add payment method
                            </div>
                        </div>

                    </div>
                    <div className="right-wrap">
                        <div className="drop-pop">
                            <img src={Eye} alt="Eye" /> view design architecture
                        </div>
                        <div className="car-box-wrap mt-15">
                            <div className="card-box-header">
                                <h5>cart summary</h5>
                            </div>
                            <div className="card-box-body p-0">
                                <div className="cart-list-wrap">
                                    <div className="cart-item">
                                        <div className="img-wrap">
                                            <img src={Item} alt="item" />
                                        </div>
                                        <div className="img-desc">
                                            <span className="item">stm32h750vbt6</span>
                                            <span className="category">mcu</span>
                                            <span className="qty category">qty 2</span>
                                        </div>
                                        <div className="price">
                                            $11.70
                                        </div>
                                    </div>
                                    <div className="cart-item">
                                        <div className="img-wrap">
                                            <img src={Item} alt="item" />
                                        </div>
                                        <div className="img-desc">
                                            <span className="item">stm32h750vbt6</span>
                                            <span className="category">mcu</span>
                                            <span className="qty category">qty 2</span>
                                        </div>
                                        <div className="price">
                                            $11.70
                                        </div>
                                    </div>
                                    <div className="cart-item">
                                        <div className="img-wrap">
                                            <img src={Item} alt="item" />
                                        </div>
                                        <div className="img-desc">
                                            <span className="item">stm32h750vbt6</span>
                                            <span className="category">mcu</span>
                                            <span className="qty category">qty 2</span>
                                        </div>
                                        <div className="price">
                                            $11.70
                                        </div>
                                    </div>
                                    <div className="cart-item">
                                        <div className="img-wrap">
                                            <img src={Item} alt="item" />
                                        </div>
                                        <div className="img-desc">
                                            <span className="item">stm32h750vbt6</span>
                                            <span className="category">mcu</span>
                                            <span className="qty category">qty 2</span>
                                        </div>
                                        <div className="price">
                                            $11.70
                                        </div>
                                    </div>
                                    <div className="cart-item">
                                        <div className="img-wrap">
                                            <img src={Item} alt="item" />
                                        </div>
                                        <div className="img-desc">
                                            <span className="item">stm32h750vbt6</span>
                                            <span className="category">mcu</span>
                                            <span className="qty category">qty 2</span>
                                        </div>
                                        <div className="price">
                                            $11.70
                                        </div>
                                    </div>
                                    <div className="cart-item">
                                        <div className="img-wrap">
                                            <img src={Item} alt="item" />
                                        </div>
                                        <div className="img-desc">
                                            <span className="item">stm32h750vbt6</span>
                                            <span className="category">mcu</span>
                                            <span className="qty category">qty 2</span>
                                        </div>
                                        <div className="price">
                                            $11.70
                                        </div>
                                    </div>
                                </div>
                                <div className="total-bar big">
                                    <div className="other">
                                        <span>Components cost</span>
                                        <span>$75.00</span>
                                    </div>
                                    <div className="other">
                                        <span>Design fee</span>
                                        <span>$150.00</span>
                                    </div>
                                    <div className="other">
                                        <span>Manufacturing cost</span>
                                        <span>$100.00</span>
                                    </div>
                                    <div className="other">
                                        <span>Delivery</span>
                                        <span>$25.00</span>
                                    </div>
                                    <div className="final">
                                        <span className="tooltip">total
                                            <img src={Info} alt="" />
                                            <span className="tooltiptext">Tooltip with infomative content</span>
                                        </span>
                                        <span>$350.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button-wrap">
                            <Link className="primary btn" to="/thankyou">confirm and pay</Link>
                        </div>
                        <div className="button-wrap">
                            <Link className="primary btn outline" to="/">add to favourites</Link>
                        </div>
                    </div>
                </div>
                <div className="bottom-btn-bar hide-on-mobile">
                    <Link to='/design' className='primary outline'>back</Link>
                </div>
            </div>
        </section>
    )
}
export default Buynow;