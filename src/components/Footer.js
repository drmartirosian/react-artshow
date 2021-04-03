import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';


function Footer() {

  return (
    <div style={{
      borderTop: '1px solid #ddd',
      position: 'absolute',
      left:0,
      bottom:0,
      right:0,
      backgroundColor:'lightgray'
    }}>
      <Accordion defaultActiveKey="0">

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        CONTACT INFO
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <p>EMAIL: the100acrewood@yahoo.com</p>
        <p>PHONE: 619-908-0665</p>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
     {/* <h1>Patty Martirosian, 2021™</h1> */}
    </div>
  );
}

export default Footer;