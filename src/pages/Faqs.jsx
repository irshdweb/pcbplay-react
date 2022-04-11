import React from 'react';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Faqs = () => {
  return (
    <section className="faqs">
      <Container maxWidth="lg">
        <h3>faqs</h3>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <div className="title">
            Q: How to choose PCB (Printed Circuit Board) material?
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="answer">
            A: PCB material has to be selected totally based on the balance between design demand, volume production and cost.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <div className="title">
            Q: How to choose PCB (Printed Circuit Board) material?
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="answer">
            A: PCB material has to be selected totally based on the balance between design demand, volume production and cost.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <div className="title">
            Q: How to choose PCB (Printed Circuit Board) material?
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="answer">
            A: PCB material has to be selected totally based on the balance between design demand, volume production and cost.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <div className="title">
            Q: How to choose PCB (Printed Circuit Board) material?
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="answer">
            A: PCB material has to be selected totally based on the balance between design demand, volume production and cost.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <div className="title">
            Q: How to choose PCB (Printed Circuit Board) material?
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="answer">
            A: PCB material has to be selected totally based on the balance between design demand, volume production and cost.
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <div className="title">
            Q: How to choose PCB (Printed Circuit Board) material?
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="answer">
            A: PCB material has to be selected totally based on the balance between design demand, volume production and cost.
            </div>
          </AccordionDetails>
        </Accordion>
      </Container>
    </section>
  )
}
export default Faqs;