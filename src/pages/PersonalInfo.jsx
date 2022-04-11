import React, { useState } from 'react';
import Edit from '../assets/images/edit.svg';
import ModalInfo from '../components/common/ModalInfo';

const PersonalInfo = () => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <section className="address-wrap-new info">
            <div className="address-header">
                <h5>personal information</h5>
                <div className="edit-btn" onClick={() => setShowDetails(true)}>
                    <img src={Edit} alt="" /> edit
                </div>
            </div>
            <div className="delivery-panel">
                <form >
                    <div className="row-form">
                        <div className="form-control">
                            <label>full name</label>
                            <input type="text" className="txt-control" placeholder='john ' />
                        </div>
                        <div className="form-control">
                            <label>last name</label>
                            <input type="text" className="txt-control" placeholder='Doe' />
                        </div>
                    </div>
                    <div className="row-form">
                        <div className="form-control">
                            <label>email</label>
                            <input type="text" className="txt-control" placeholder='test@email.com' />
                        </div>
                        <div className="form-control">
                            <label>phone</label>
                            <input type="text" className="txt-control" placeholder='390664220484' />
                        </div>
                    </div>


                </form>

            </div>
            <ModalInfo show={showDetails} close={() => setShowDetails(false)} />
        </section>
    )
}

export default PersonalInfo