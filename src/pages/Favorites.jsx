import React from 'react';
import MyOrderDesktopfav from '../components/my-account/MyOrderDesktopfav';
import MyOrderMobilefav from '../components/my-account/MyOrderMobilefav';


const Favorites = () => {
  return (
    <section className="main-grid-my-order">
      <div className="top-search">
        <h3>my favorites</h3>
        <input type="text" name="" className="srchbar" placeholder='search for orders, customer or something...' />
      </div>
      <div className="table-section hide-from-mobile">
        <MyOrderDesktopfav />
      </div>
      <div className="table-section hide-from-desktop">
        <MyOrderMobilefav />
      </div>
    </section>
  )
}

export default Favorites;
