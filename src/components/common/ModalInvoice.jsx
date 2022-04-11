import React from 'react';
import Logo from '../../assets/images/logo.svg'

export const ModalInvoice = (props) => {
  return (
    <div className={`modal-overlay ${props.show ? 'active': ''}`} onClick={props.close} >
        <div className="invoice-alert-wrap">
            <div className="hdr">
                <img src={Logo} alt="" />
                <div className="address">
                    <strong>Billed to:</strong>
                    <p>Terry Baptista</p>
                    <p>3455  Geraldine Lane,</p>
                    <p>New York</p>
                    <p>10013</p>
                    <p>United States</p>
                </div>
            </div>
            <div className="sub mt-up">
                <p class="title">project name</p>
                <p>#00261</p>
            </div>
            <div className="sub">
                <p class="title">project name</p>
                <p>#00261</p>
            </div>
            <div className="sub">
                <p class="title">project name</p>
                <p>#00261</p>
            </div>
            <div className="sub-flex">
                <div className="sub">
                    <p class="title">project name</p>
                    <p>#00261</p>
                </div>
                <div className="sub">
                    <p class="title">project name</p>
                    <p>#00261</p>
                </div>
                <div className="sub">
                    <p class="title">project name</p>
                    <p>#00261</p>
                </div>
            </div>
            <div className="tbl-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>part number</th>
                            <th>sub-category</th>
                            <th>Qty</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>stm32h750vbt6</td>
                            <td>gnss</td>
                            <td>01</td>
                            <td>$ 3,000.00</td>
                        </tr>
                        <tr>
                            <td>stm32h750vbt6</td>
                            <td>gnss</td>
                            <td>01</td>
                            <td>$ 3,000.00</td>
                        </tr>
                        <tr>
                            <td>stm32h750vbt6</td>
                            <td>gnss</td>
                            <td>01</td>
                            <td>$ 3,000.00</td>
                        </tr>
                        <tr>
                            <td>stm32h750vbt6</td>
                            <td>gnss</td>
                            <td>01</td>
                            <td>$ 3,000.00</td>
                        </tr>
                        <tr>
                            <td>stm32h750vbt6</td>
                            <td>gnss</td>
                            <td>01</td>
                            <td>$ 3,000.00</td>
                        </tr>
                        <tr>
                            <td>stm32h750vbt6</td>
                            <td>gnss</td>
                            <td>01</td>
                            <td>$ 3,000.00</td>
                        </tr>
                    </tbody>
                </table>
                <div className="total-pan">
                    <div className="left">
                        <p>number of pcb</p>
                        <p>components</p>
                        <p>manufacturing</p>
                        <p>delivery</p>
                        <p>total</p>
                    </div>
                    <div className="left right-text">
                        <p>3</p>
                        <p>$ 150.00</p>
                        <p>$ 150.00</p>
                        <p>$ 150.00</p>
                        <p>$ 4,950.00</p>
                    </div>
                </div>
            </div>
            <div className="payment-sum">
                <p>Payment Details</p>
                <p>Paypal: <span>example@email.com</span> </p>
                <p>UPI: <span>userid@okbank</span> </p>
            </div>
            <div className="footer">
                <p className="web">www.pcbplay.com</p>
                <p>email@email.com</p>
                <p>646-888-6885</p>
            </div>
        </div>
    </div>
  )
}

export default ModalInvoice;
