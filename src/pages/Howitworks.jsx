import React from 'react';
import Container from '@mui/material/Container';
import Item from '../assets/images/item-2.png';

const Howitworks = () => {
  return (
    <section className="how-works">
        <Container maxWidth="lg">
            <h3>how it works</h3>
            <div className="full-wrap">
                <div className="left-text-area">
                    <h4>lorem Ipsum</h4>
                    <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit 
                    </p>
                    <ul>
                        <li>lorem ipsum dolor sit amet, consectetur </li>
                        <li>lorem ipsum dolor sit amet, consectetur </li>
                        <li>lorem ipsum dolor sit amet, consectetur </li>
                        <li>lorem ipsum dolor sit amet, consectetur </li>
                    </ul>
                </div>
                <div className="right-image-pan">
                    <img src={Item} alt="Item 2"/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Howitworks
