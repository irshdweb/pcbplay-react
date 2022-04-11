import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Description from './Description';
import Cartbutton from './Cartbutton';

export const Desktopdata = () => {
    return (
        <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <div className="wrap">
                        <div className="hd">stm32h750vbt6
                            <div className="icon-side">
                                <ArrowForwardIosIcon />
                            </div>
                            <div className="icon-down">
                                <ExpandMoreIcon />
                            </div>
                        </div>
                        <div className="hd text-center">mcu</div>
                        <div className="hd">
                            <div className="wrap-text">
                                ic mcu 32bit 1MB flash 144 lqfp with othet properties features, best and affordable
                            </div>
                        </div>
                        <div className="hd">stmicroelectronics</div>
                        <div className="hd text-center price">$11.70</div>
                        <div className="hd">
                            <Cartbutton />
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Description />
                </AccordionDetails>
            </Accordion></>
    )
}
export default Desktopdata;