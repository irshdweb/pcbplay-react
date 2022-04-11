import React, { useState } from 'react';
import Delete from '../../assets/images/delete.svg';
import Pagination from '@mui/material/Pagination';
import Displaynumber from '../common/Displaynumber';
import ModalC from '../common/ModalC';
import ModalDelete from '../common/ModalDelete';

import {
    Link
  } from "react-router-dom";

export const MyOrderDesktopfav = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const showAll = (e) => {
    e.stopPropagation();
    setShowAlert(true)
  }
  return (
    <>
      <table className="full-table">
        <thead>
          <tr>
            <th>project name</th>
            <th>project id</th>
            <th>total cost</th>
            <th>action</th>
            <th>delete</th>

          </tr>
        </thead>
        <tbody>
          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td className='download'> <Link to='/design' >place an order</Link> </td>
            <td> <img src={Delete} alt="delete" onClick={showAll} /> </td>
          </tr>

          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td className='download'> <Link to='/design' >place an order</Link> </td>
            <td> <img src={Delete} alt="delete" onClick={showAll} /> </td>
          </tr>

          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td className='download'> <Link to='/design' >place an order</Link> </td>
            <td> <img src={Delete} alt="delete" onClick={showAll} /> </td>
          </tr>

          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td className='download'> <Link to='/design' >place an order</Link> </td>
            <td> <img src={Delete} alt="delete" onClick={showAll} /> </td>
          </tr>

          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td className='download'> <Link to='/design' >place an order</Link> </td>
            <td> <img src={Delete} alt="delete" onClick={showAll} /> </td>
          </tr>

          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td className='download'> <Link to='/design' >place an order</Link> </td>
            <td> <img src={Delete} alt="delete" onClick={showAll} /> </td>
          </tr>

          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td className='download'> <Link to='/design' >place an order</Link> </td>
            <td> <img src={Delete} alt="delete" onClick={showAll} /> </td>
          </tr>

          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td className='download'> <Link to='/design' >place an order</Link> </td>
            <td> <img src={Delete} alt="delete" onClick={showAll} /> </td>
          </tr>

          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td className='download'> <Link to='/design' >place an order</Link> </td>
            <td> <img src={Delete} alt="delete" onClick={showAll} /> </td>
          </tr>

          <tr onClick={() => setShowDetails(true)}>
            <td>stm32h750vbt6</td>
            <td>220130001</td>
            <td>198734</td>
            <td className='download'> <Link to='/design' >place an order</Link> </td>
            <td> <img src={Delete} alt="delete" onClick={showAll} /> </td>
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
    </>
  )
}

export default MyOrderDesktopfav;

