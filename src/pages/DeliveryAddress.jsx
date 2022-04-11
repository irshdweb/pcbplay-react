import React, { useState } from 'react';
import Plus from '../assets/images/plus.png';

import Active from '../assets/images/active.svg';
import Pencil from '../assets/images/pencil.svg';
import Trash from '../assets/images/Trash.svg';
import AdressForm from '../components/delivery-address/AddressForm';
import ModalEditAdd from '../components/common/ModalEditAdd';

export const DeliveryAddress = () => {
    const [showDetails, setShowDetails] = useState(false);

    const [addr1, setaddr1] = useState(true);
    const [addr2, setaddr2] = useState(false);

    const [showadress, setshowadress] = useState(false);
    const [showAlert, setshowAlert] = useState(false);

    const activeadd = (val) => {
        if (val === 1) {
            setaddr1(true);
            setaddr2(false);
        } else {
            setaddr1(false);
            setaddr2(true);
        }
    }


    const sendDataToParent = (event) => { 
        event.preventDefault();

        setshowAlert(true);

        setTimeout(()=>{
            setshowAlert(false);   
        },3000)
    };

    return (
        <section className="address-wrap-new">
            <div className="address-header">
                <h5>delivery address</h5>
                <div className="btn primary more-btn hide-on-mobile" onClick={() => setshowadress(prevState => !prevState)}>
                    <img src={Plus} alt="plus" />
                    add address
                </div>
            </div>
            <div className="delivery-panel">

                <div className="alert-wrap">
                    {
                        showAlert ?
                            <div className="alert-succ">
                                alert message
                            </div>
                            : null
                    }
                </div>

                <div className="address-wrap">
                    <div className={`address-box ${addr1 ? 'active' : ''}`} onClick={() => { activeadd(1) }}>
                        <h4>John Paul</h4>
                        <p>saint marco 14, Rome</p>
                        <p>rome, nomentano - 559944</p>
                        <p>mobile Number: +390664220484</p>
                        <div className="top-links">
                            <img src={Active} alt="" width="40px" />
                            <img src={Pencil} alt="" className='img-2' onClick={() => setShowDetails(true)}/>
                            <img src={Trash} alt="" />
                        </div>
                    </div>
                    <div className={`address-box ${addr2 ? 'active' : ''}`} onClick={() => { activeadd(2) }}>
                        <h4>John Paul</h4>
                        <p>saint marco 14, Rome</p>
                        <p>rome, nomentano - 559944</p>
                        <p>mobile Number: +390664220484</p>
                        <div className="top-links">
                            <img src={Active} alt="" width="40px" />
                            <img src={Pencil} alt="" className='img-2' onClick={() => setShowDetails(true)}/>
                            <img src={Trash} alt="" />
                        </div>
                    </div>
                </div>
                <div className="mobile-btn">
                    <div className="btn primary more-btn  hide-on-desktop" onClick={() => setshowadress(prevState => !prevState)}>
                        <img src={Plus} alt="plus" />
                        add address
                    </div>
                </div>
            </div>
            {
                showadress ?
                    <div className="form-section">
                        <AdressForm sendDataToParent={sendDataToParent}/>
                    </div>
                    : null
            }
            <ModalEditAdd show={showDetails} close={() => setShowDetails(false)} />
        </section>
    )
}
export default DeliveryAddress;
