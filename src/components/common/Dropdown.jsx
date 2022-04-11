import React from 'react';
import {
    Link
  } from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="dropdown-container">
       <ul>
           <li>
               <Link to='/my-account/my-order'>my account</Link>
           </li>
           <li>
               <Link to='/'>logout</Link>
           </li>
       </ul>
    </div>
  )
}
export default Dropdown;