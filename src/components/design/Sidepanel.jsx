import React from 'react';
import Question from '../../assets/images/question.svg';
import Item from '../../assets/images/cart-thumb.png';
import Info from '../../assets/images/info.svg';
import CheckboxControl from '../common/CheckboxControl'
import RadiobuttonControl from '../common/RadiobuttonControl'

export const Sidepanel = () => {
    return (
        <>
            <div className="car-box-wrap">
                <div className="card-box-header">
                    <h5>options</h5>
                    <div className="tooltip mt-5">
                        <img src={Question} alt="" />
                        <span className="tooltiptext">Tooltip with infomative content</span>
                    </div>
                    
                </div>
                <div className="card-box-body">
                    <div className="form-control">
                        <label>project name</label>
                        <input type="text" className="txt-control with-icon" placeholder='enter your project name' />
                    </div>
                    <div className="form-control">
                        <label>board dimensions</label>
                        <div className="checkb-wrap">
                            <div className="wrp">
                                <CheckboxControl id='length' />  length
                            </div>
                            <div className="wrp">
                                <CheckboxControl id='width' />  width
                            </div>
                        </div>
                        <div className="form-control">
                            <div className="checkb-wrap btm">
                                <input type="text" className="txt-control" placeholder='11.7' />
                                <input type="text" className="txt-control" placeholder='12' />
                                <select name="" id="" className="txt-control pr-0">
                                    <option value="mm">mm</option>
                                </select>
                            </div>
                        </div>
                        <label>Component Placement</label>
                        <div className="checkb-wrap">
                            <div className="wrp">
                                <RadiobuttonControl name="side" value="top"/>  top
                            </div>
                            <div className="wrp">
                                <RadiobuttonControl name="side" value="both-side"/>   both side
                            </div>
                        </div>
                        <div className="form-control"></div>
                        <label>other parameters</label>
                        <div className="checkb-wrap flex-col">
                            <div className="wrp">
                                <CheckboxControl id="td2"/>  standoff holes
                            </div>
                            <div className="wrp">
                                <CheckboxControl id="td1"/>  use identical components
                            </div>
                        </div>
                    </div>
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
                                <img src={Item} alt="item"  />
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
                                <img src={Item} alt="item"  />
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
                                <img src={Item} alt="item"  />
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
                                <img src={Item} alt="item"  />
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
                                <img src={Item} alt="item"  />
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
                                <img src={Item} alt="item"  />
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
                    <div className="total-bar small">
                        <span className="tooltip">total
                            <img src={Info} alt="" />
                            <span className="tooltiptext">Tooltip with infomative content</span>
                        </span>
                        <span>$350.00</span>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Sidepanel;