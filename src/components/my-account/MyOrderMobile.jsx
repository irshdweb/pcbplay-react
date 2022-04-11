import React, {useState} from 'react';
import Delete from '../../assets/images/delete.svg';
import Download from '../../assets/images/download.svg';
import Eye from '../../assets/images/eye-color.svg';
import ModalC from '../common/ModalC';
import ModalDelete from '../common/ModalDelete';
import ModalInvoice from '../common/ModalInvoice';

export const MyOrderMobile = () => {

    const [showDetails, setShowDetails] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showInvoice, setShowInvoice] = useState(false);

    const showAll = (e) => {
      e.stopPropagation();
      setShowAlert(true)
    }
    const showIns = (e) => {
        e.stopPropagation();
        setShowInvoice(true)
    }

  return (
    <>
        <div className="mobile-wrap-data" onClick={() => setShowDetails(true)}>
            <div className="hdr">
                <h5>small project</h5>
                <img src={Delete} alt="delete" onClick={showAll}/> 
            </div>
            <div className="bdy">
                <div className="item">
                    <strong>project id</strong>
                    <p>220130001</p>
                </div>
                <div className="item">
                    <strong>shipping id</strong>
                    <p>220130001</p>
                </div>
                <div className="item">
                    <strong>Delivery time</strong>
                    <p>220130001</p>
                </div>
                <div className="item">
                    <strong>design files</strong>
                    <p class="link"><img src={Download} alt="" /> download</p>
                </div>

                <div className="item">
                    <strong>design files</strong>
                    <p class="link"><span className="view"><img src={Eye} alt="" /> view </span></p>
                </div>
                <div className="item">
                    <strong>order status</strong>
                    <p><span className="testing">testing</span> </p>
                </div>
                <div className="item" onClick={showIns}>
                    <strong>invoice</strong>
                    <p class="link"><span className="view"><img src={Eye} alt="" /> view </span></p>
                </div>
            </div>
        </div>

        <div className="mobile-wrap-data" onClick={() => setShowDetails(true)}>
            <div className="hdr">
                <h5>small project</h5>
                <img src={Delete} alt="delete" onClick={showAll}/> 
            </div>
            <div className="bdy">
                <div className="item">
                    <strong>project id</strong>
                    <p>220130001</p>
                </div>
                <div className="item">
                    <strong>shipping id</strong>
                    <p>220130001</p>
                </div>
                <div className="item">
                    <strong>Delivery time</strong>
                    <p>220130001</p>
                </div>
                <div className="item">
                    <strong>design files</strong>
                    <p class="link"><img src={Download} alt="" /> download</p>
                </div>

                <div className="item">
                    <strong>design files</strong>
                    <p class="link"><span className="view"><img src={Eye} alt="" /> view </span></p>
                </div>
                <div className="item">
                    <strong>order status</strong>
                    <p><span className="testing">testing</span> </p>
                </div>
                <div className="item" onClick={showIns}>
                    <strong>invoice</strong>
                    <p class="link"><span className="view"><img src={Eye} alt="" /> view </span></p>
                </div>
            </div>
        </div>
        <ModalC show={showDetails} close={() => setShowDetails(false)}/>
        <ModalDelete show={showAlert} close={() => setShowAlert(false)} />
        <ModalInvoice show={showInvoice} close={() => setShowInvoice(false)} />
    </>
  )
}

export default MyOrderMobile;