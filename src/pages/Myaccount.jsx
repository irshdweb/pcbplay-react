import React from 'react';
import SidebarAccount from '../components/my-account/SidebarAccount';
import { Outlet } from 'react-router-dom';

export const Myaccount = () => {
  return (
    <section className="account-wrap">
        <div className="left-menu">
            <SidebarAccount/>
        </div>
        <div className="route-wrap">
            <Outlet />
        </div>
    </section>
  )
}
export default Myaccount;
