import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Description from './Description';
import Cartbutton from './Cartbutton';

const Mobiledata = () => {
    return (
        <>
            <div className="item-wrap">
                <div className="header-data">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <div className="text-data">
                                <div className="left">
                                    <span className="hdr">Part-number</span>
                                    <span className="text">stm32h750vbt6</span>
                                </div>
                                <div className="left">
                                    <span className="hdr">manufacturer</span>
                                    <span className="text">stmicroelectronics</span>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Description />
                        </AccordionDetails>
                    </Accordion>
                    <div className="description-data">
                        <span className="hdr">Description</span>
                        <span className="text">
                            ic mcu 32bit 1MB flash 144 lqfp with othet properties features, best and affordable
                        </span>
                    </div>
                    <div className="text-data">
                        <div className="left">
                            <span className="hdr">price $11.70</span>
                        </div>
                        <div className="left">
                            <Cartbutton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mobiledata;
