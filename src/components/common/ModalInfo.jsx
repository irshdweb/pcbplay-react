import React from 'react';
import Close from '../../assets/images/close.svg';
import InfoForm from '../delivery-address/InfoForm';

const ModalInfo= (props) => {
    return (
        <div className={`modal-overlay ${props.show ? 'active' : ''}`} onClick={props.close} >
            <div className="modal-box edit">
                <div className="detail-wrap">
                    <div className="modal-header">
                        <h4>update user information</h4>
                        <img src={Close} alt="close" onClick={props.close} />
                    </div>
                    <div className="modal-body">
                        <div className="full-wrap">
                            <InfoForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalInfo