import React from 'react';
import Close from '../../assets/images/close.svg';
import AdressForm from '../delivery-address/AddressForm';

const ModalEditAdd = (props) => {
    return (
        <div className={`modal-overlay ${props.show ? 'active' : ''}`} onClick={props.close} >
            <div className="modal-box edit">
                <div className="detail-wrap">
                    <div className="modal-header">
                        <h4>update delivery address</h4>
                        <img src={Close} alt="close" onClick={props.close} />
                    </div>
                    <div className="modal-body">
                        <div className="full-wrap">
                            <AdressForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEditAdd