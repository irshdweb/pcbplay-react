import React, {useState} from 'react';
import Delete from '../../assets/images/delete.svg';
import ModalC from '../common/ModalC';
import ModalDelete from '../common/ModalDelete';
import {
    Link
  } from "react-router-dom";

export const MyOrderMobilefav = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const showAll = (e) => {
      e.stopPropagation();
      setShowAlert(true)
    }
  return (
    <>
        <div className="mobile-wrap-data small" onClick={() => setShowDetails(true)}>
            <div className="hdr">
                <h5>small project</h5>
                <Link to='/design' >place an order</Link> 
                <img src={Delete} alt="delete" onClick={showAll}/> 
            </div>
            <div className="bdy">
                <div className="item">
                    <strong>project id</strong>
                    <p>220130001</p>
                </div>
                <div className="item">
                    <strong>total cost</strong>
                    <p>$11.70</p>
                </div>
            </div>
        </div>

        <ModalC show={showDetails} close={() => setShowDetails(false)}/>
        <ModalDelete show={showAlert} close={() => setShowAlert(false)} />
    </>
  )
}

export default MyOrderMobilefav;