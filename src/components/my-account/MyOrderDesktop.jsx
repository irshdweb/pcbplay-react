import React, { useState } from 'react';
import Delete from '../../assets/images/delete.svg';
import Download from '../../assets/images/download.svg';
import Eye from '../../assets/images/eye-color.svg';
import Pagination from '@mui/material/Pagination';
import Displaynumber from '../common/Displaynumber';
import ModalC from '../common/ModalC';
import ModalDelete from '../common/ModalDelete';
import ModalInvoice from '../common/ModalInvoice';

export const MyOrderDesktop = () => {

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
      <table className="full-table">
        <thead>
          <tr>
            <th>project name</th>
            <th>project id</th>
            <th>shipping id</th>
            <th>order status</th>
            <th>delivery time</th>
            <th>design files</th>
            <th>design architecture</th>
            <th>cancel order</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td> <span className="testing">testing</span> </td>
            <td>Feb 1, 2022</td>
            <td className='download'>
              <img src={Download} alt="" /> download
            </td>
            <td>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
            <td onClick={showAll} > <img src={Delete} alt="delete" /> </td>
            <td onClick={showIns}>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
          </tr>
          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td> <span className="testing">testing</span> </td>
            <td>Feb 1, 2022</td>
            <td className='download'>
              <img src={Download} alt="" /> download
            </td>
            <td>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
            <td onClick={showAll} > <img src={Delete} alt="delete" /> </td>
            <td onClick={showIns}>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
          </tr>
          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td> <span className="man">manufacturing</span> </td>
            <td>Feb 1, 2022</td>
            <td className='download'>
              <img src={Download} alt="" /> download
            </td>
            <td>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
            <td onClick={showAll} > <img src={Delete} alt="delete"/> </td>
            <td onClick={showIns}>
              <span className="view"><img src={Eye} alt=""/> view </span>
            </td>
          </tr>
          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td> <span className="design">designing</span> </td>
            <td>Feb 1, 2022</td>
            <td className='download'>
              <img src={Download} alt="" /> download
            </td>
            <td>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
            <td onClick={showAll} > <img src={Delete} alt="delete" /> </td>
            <td onClick={showIns}>
              <span className="view"><img src={Eye} alt=""/> view </span>
            </td>
          </tr>
          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td> <span className="reject">rejected</span> </td>
            <td>Feb 1, 2022</td>
            <td className='download'>
              <img src={Download} alt="" /> download
            </td>
            <td>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
            <td onClick={showAll} > <img src={Delete} alt="delete" /> </td>
            <td onClick={showIns}>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
          </tr>
          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td> <span className="del">delivered</span> </td>
            <td>Feb 1, 2022</td>
            <td className='download'>
              <img src={Download} alt="" /> download
            </td>
            <td>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
            <td onClick={showAll} > <img src={Delete} alt="delete"/> </td>
            <td onClick={showIns}>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
          </tr>
          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td> <span className="del">delivered</span> </td>
            <td>Feb 1, 2022</td>
            <td className='download'>
              <img src={Download} alt="" /> download
            </td>
            <td>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
            <td onClick={showAll} > <img src={Delete} alt="delete" /> </td>
            <td onClick={showIns}>
              <span className="view"><img src={Eye} alt=""/> view </span>
            </td>
          </tr>
          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td> <span className="del">delivered</span> </td>
            <td>Feb 1, 2022</td>
            <td className='download'>
              <img src={Download} alt="" /> download
            </td>
            <td>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
            <td onClick={showAll} > <img src={Delete} alt="delete" /> </td>
            <td onClick={showIns}>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
          </tr>
          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td> <span className="del">delivered</span> </td>
            <td>Feb 1, 2022</td>
            <td className='download'>
              <img src={Download} alt="" /> download
            </td>
            <td>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
            <td onClick={showAll} > <img src={Delete} alt="delete"/> </td>
            <td onClick={showIns}>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
          </tr>
          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td> <span className="del">delivered</span> </td>
            <td>Feb 1, 2022</td>
            <td className='download'>
              <img src={Download} alt="" /> download
            </td>
            <td>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
            <td onClick={showAll} > <img src={Delete} alt="delete" /> </td>
            <td onClick={showIns}>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
          </tr>
          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td> <span className="del">delivered</span> </td>
            <td>Feb 1, 2022</td>
            <td className='download'>
              <img src={Download} alt="" /> download
            </td>
            <td>
              <span className="view"><img src={Eye} alt="" /> view </span>
            </td>
            <td onClick={showAll} > <img src={Delete} alt="delete"/> </td>
            <td onClick={showIns}>
              <span className="view"><img src={Eye} alt=""/> view </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="tbl-footer">
        <div className="page-numb">showing 1 to 10 of 50 entries</div>

        <div className="pagin">
          <div className="select">
            display <Displaynumber />
          </div>
          <Pagination count={6} variant="outlined" color="primary" />
        </div>

      </div>
      <ModalC show={showDetails} close={() => setShowDetails(false)} />
      <ModalDelete show={showAlert} close={() => setShowAlert(false)} />
      <ModalInvoice show={showInvoice} close={() => setShowInvoice(false)} />
    </>
  )
}

export default MyOrderDesktop;

