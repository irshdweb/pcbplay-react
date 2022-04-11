import React, {useState, useEffect} from 'react'
import Logo from '../../assets/images/logo.svg';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Dropdown from './Dropdown';

import {
    useLocation, Link
} from "react-router-dom";

const Header = () => {
    const [drop, showDrop] = useState(false)
    const location = useLocation();

    const showHideDrop = (e)=>{
        e.stopPropagation();
        showDrop(prevState => !prevState)
    }

    useEffect(() => {
        const onClick = (e) => {
            showDrop(false)
        };
        document.body.addEventListener("click", onClick);
    
        return () => {
          document.body.removeEventListener("click", onClick);
        };
      }, []);


    if (location.pathname !== '/login' && location.pathname !== '/' && location.pathname !== '/register')
    return (
        <section className="header">
            <Container maxWidth="lg">
                <div className="wrap">
                    <div className="logo">
                        <Link to="/home">
                            <img src={Logo} alt="PCB Play" />
                        </Link>
                    </div>
                    <div className="menu">
                        <ul className="nav">
                            <li><Link to='/how-its-work'>how it works</Link></li>
                            <li><Link to='/faqs'>faqs</Link></li>
                        </ul>
                        <Link to="/design" className="primary header-btn">
                            start a project
                        </Link>
                        <div className="avatar-wrap">
                            <Avatar sx={{ bgcolor: '#00843C' }} onClick={showHideDrop}>jb</Avatar>
                            {
                                drop ? <Dropdown/> : null
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
    else
    return(null)
}

export default Header;
