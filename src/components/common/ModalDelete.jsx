import React from 'react';
import Warn from '../../assets/images/warn.svg';
import CheckboxControl from '../../components/common/CheckboxControl'

export const ModalDelete = (props) => {
  return (
    <>
        <div className={`modal-overlay ${props.show ? 'active': ''}`} onClick={props.close} >
            <div className="small-alert-wrap">
                <div className="top-part">
                    <img src={Warn} alt="" />
                    <div className="content">
                        <h5>Unsaved changes</h5>
                        <p>Do you want to save or discard changes?</p>
                    </div>
                </div>
                <div className="btns">
                    <div className="check">
                        <CheckboxControl/> Don’t show again
                    </div>
                        <div className="btn primary outline">discard</div>
                        <div className="btn primary">save changes</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ModalDelete;
