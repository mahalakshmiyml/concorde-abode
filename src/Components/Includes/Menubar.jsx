import React, { useState } from 'react'
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap'
// import Modals from './Modals';

const Menubar = () => {

    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div  className="sticky-top" id="navbar">
        
        <div id="top-header" className="p-2 p-md-1 bg-dark">
        <Container>
          <Row className="justify-content-center">
            <Col
              md={4}
              className="d-none d-md-block text-info fw-bold align-self-center"
            >
              <i className="fa fa-map-marker-alt"></i> Sarjapur Rd Bangalore.
            </Col>
            <Col md={4} xs={5} className="align-self-center">
              <div className="text-center">
                <Button
                  variant="info"
                  size="sm"
                  onClick={handleShow}
                  className="custom-button"
                >
                  <i className="fa fa-spinner fa-flip fa-download"></i> Brochure
                </Button>
              </div>
            </Col>
            <Col md={4} xs={7} className="align-self-center">
              <div className="text-center">
                <a
                  href="tel:+918095999000"
                  className="anchor p-0 btn btn-transparent fw-bold text-info m-1"
                >
                  <i className="fa fa-phone-volume"></i> +91-80959 99000
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        className="shadow-sm bg-white"
      >
          
          
  <Container>
  <Navbar.Brand href="#home">Concorde Abode 99</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#overview">Overview</Nav.Link>      
      <Nav.Link href="#master-plan">Master Plan</Nav.Link>          
      <Nav.Link href="#pricing">Pricing</Nav.Link>      
      <Nav.Link href="#location">Location</Nav.Link>
      <Nav.Link href="#virtual-tour">Virtual Tour</Nav.Link>  
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

{/* <Modals

        show={show}
        handleClose={handleClose}
        title="Download Brochure"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />  */}
      
    </div>
  )
}

export default Menubar