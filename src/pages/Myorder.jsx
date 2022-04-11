import React from 'react';
import MyOrderDesktop from '../components/my-account/MyOrderDesktop';
import MyOrderMobile from '../components/my-account/MyOrderMobile';

export const Myorder = () => {
  return (
    <section className="main-grid-my-order">
        <div className="top-search">
            <h3>my orders</h3>
            <input type="text" name="" className="srchbar" placeholder='search for orders, customer or something...'/>
        </div>
        <div className="table-section hide-from-mobile">
            <MyOrderDesktop/>
        </div>
        <div className="table-section hide-from-desktop">
            <MyOrderMobile/>
        </div>
    </section>
  )
}

export default Myorder;
