import React, { Fragment } from 'react';
import './contactus.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Fragment>
   <section className="contact">
        <h1 className="h1"><span>L</span>et’s discuss your project</h1>
        <Form >
          <Container>
            <div className="formcontact">
      <Row>
        <Col>
          <Form.Control className="proj" placeholder="Name" style={{ backgroundColor:' rgb(46, 54, 124,0.5 )'}} />
        </Col>
        <Col>
        <Form.Group controlId="formGridEmail">
          <Form.Control className="proj" type="email" placeholder="Enter email" />
        </Form.Group>
        </Col>
        <Col>
          <Form.Control className="proj" placeholder="Phone" />
        </Col>
      </Row>
      <Row >
      <Col>
          <Form.Control className="proj" type="text" placeholder="Tell US About Your Project " style={{width:'900px',height:'80px'}}/>
        </Col>
      </Row>
      <Button className="but" type="submit">
        Submit
      </Button>
      </div>
      </Container>
    </Form>
      </section>
    </Fragment>

  )
}

export default ContactUs
