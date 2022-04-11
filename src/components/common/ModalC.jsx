import React from 'react';
import Close from '../../assets/images/close.svg';
import Question from '../../assets/images/question.svg';

const ModalC = (props) => {
  return (
    <div>
      <div className={`modal-overlay ${props.show ? 'active' : ''}`} onClick={props.close} >
        <div className="modal-box">

          <div className="detail-wrap">
            <div className="modal-header">
              <h4>order details</h4>
              <img src={Close} alt="close" onClick={props.close} />
            </div>
            <div className="modal-body">
              <div className="full-wrap">
                <div className="left-detail">
                  <div className="car-box-wrap detail-card">
                    <div className="card-box-header">
                      <h5>general info</h5>
                      <div className="tooltip mt-5">
                        <img src={Question} alt="" />
                        <span className="tooltiptext">Tooltip with infomative content</span>
                      </div>
                    </div>
                    <div className="card-box-body p-0">
                      <div className="cart-list-wrap">
                        <div className="cart-item">
                          <div className="desc">
                            project name
                          </div>
                          <div className="desc">
                            arm
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="desc">
                            project name
                          </div>
                          <div className="desc">
                            arm
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="desc">
                            project name
                          </div>
                          <div className="desc">
                            arm
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="desc">
                            project name
                          </div>
                          <div className="desc">
                            arm
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="desc">
                            project name
                          </div>
                          <div className="desc">
                            arm
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="desc">
                            project name
                          </div>
                          <div className="desc">
                            arm
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="desc">
                            project name
                          </div>
                          <div className="desc">
                            arm
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="desc">
                            project name
                          </div>
                          <div className="desc">
                            arm
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="desc">
                            project name
                          </div>
                          <div className="desc">
                            arm
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="desc">
                            project name
                          </div>
                          <div className="desc">
                            arm
                          </div>
                        </div>

                      </div>
                      <div className="total-bar">

                      </div>
                    </div>
                  </div>

                  <div className="car-box-wrap detail-card mt-18">
                    <div className="card-box-header">
                      <h5>delivery address info</h5>
                      <div className="tooltip mt-5">
                        <img src={Question} alt="" />
                        <span className="tooltiptext">Tooltip with infomative content</span>
                      </div>
                    </div>
                    <div className="card-box-body p-0">
                      <div className="cart-list-wrap small-wrap">
                        <h5>John Paul</h5>
                        <p>saint marco 14, Rome rome, nomentano - 559944</p>
                        <p>mobile Number: +390664220484</p>
                      </div>
                      <div className="total-bar">

                      </div>
                    </div>
                  </div>
                </div>
                <div className="left-detail">
                  <div className="car-box-wrap detail-card">
                    <div className="card-box-header">
                      <h5>cart summary</h5>
                    </div>
                    <div className="card-box-body p-0">
                      <div className="cart-list-wrap full-h">
                        <div className="cart-item">
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="price">
                            $11.70
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="price">
                            $11.70
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="price">
                            $11.70
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="price">
                            $11.70
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="price">
                            $11.70
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="price">
                            $11.70
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="price">
                            $11.70
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="price">
                            $11.70
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="price">
                            $11.70
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="price">
                            $11.70
                          </div>
                        </div>
                        <div className="cart-item">
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="img-desc">
                            <span className="item">stm32h750vbt6</span>
                          </div>
                          <div className="price">
                            $11.70
                          </div>
                        </div>
                      </div>
                      <div className="total-bar big">
                        <div className="other">
                          <span>Number of pcb</span>
                          <span>3</span>
                        </div>
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

                            <span className="tooltiptext">Tooltip with infomative content</span>
                          </span>
                          <span>$350.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn primary outline">close</button>
              <button className="btn primary">save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalC;


