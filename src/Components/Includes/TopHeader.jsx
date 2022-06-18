import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Row,
  Col,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-1.png";
import BrochureModal from "./BrochureModal";
import Modals from "./Modals";

const TopHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sticky-top" id="navbar">
      <div id="top-header" className="p-2 p-md-1 bg-dark">
        <Container>
          <Row className="justify-content-center">
            <Col
              md={4}
              className="d-none d-md-block text-info fw-bold align-self-center"
            >
              <i className="fa fa-map-marker-alt"></i> Electronic City, Bangalore.
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
          <Navbar.Brand as={Link} to="/">
            <Image src={Logo} className="img-fluid" alt="" />
          </Navbar.Brand>
          {/* <Nav.Link
            className="btn-sm btn-danger text-white d-block d-md-none px-3 border-0"
            href="tel:080959 99000 "
          >
            <i className="fa fa-phone-volume"></i> 80959 99000
          </Nav.Link> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#overview">Overview</Nav.Link>
              {/* <NavDropdown
                title="Prestige City Projects"
                id="collasible-nav-dropdown1"
                className="d-block d-md-none"
              >
                <NavDropdown.Item href="/projects/meridian-park">Meridian Park</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/projects/eden-park">
                  Eden Park
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/projects/avalon-park">
                  Avalon Park
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/projects/aspen-greens">
                  Aspen Greens
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/projects/great-acres">
                  Great Acres
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="menu-area d-none d-md-block"
                title="Prestige City Projects"
                id="collasible-nav-dropdown"
              >
                <Container>
                  <Row className="text-center">
                    <Col md={3} xs={6} sm={6}>
                      <NavDropdown.Item
                        as={Link}
                        to="/projects/meridian-park"
                        className="fs-5 fw-bold text-primary"
                      >
                        Meridian Park
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            as={Link}
                            to="/projects/meridian-park"
                          >
                            <div className="">
                              <Image
                                className="img-fluid"
                                alt=""
                                src={image1}
                              />
                              <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1 pill-custom">
                                New Launch
                              </span>
                              <p className="text-dark m-0 py-2 text-primary text-center">
                                Excl. 3 Bed Apartments
                              </p>
                            </div>
                          </a>
                        </div>
                      </NavDropdown.Item>
                    </Col>

                    <Col md={3} xs={6} sm={6}>
                      <NavDropdown.Item
                        as={Link}
                        to="/projects/eden-park"
                        className="fs-5 fw-bold text-primary"
                      >
                        Eden Park
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            as={Link}
                            to="/projects/eden-park"
                          >
                            <Image className="img-fluid" alt="" src={image2} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1 pill-custom">
                              New Launch
                            </span>
                            <p className="text-dark m-0 py-2 text-primary text-center">
                              1BHK & 2BHK Bed Apartments
                            </p>
                          </a>
                        </div>
                      </NavDropdown.Item>
                    </Col>

                    <Col md={3} xs={6} sm={6}>
                      <NavDropdown.Item
                        as={Link}
                        to="/projects/avalon-park"
                        className="fs-5 fw-bold text-primary"
                      >
                        Avalon Park
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            as={Link}
                            to="/projects/avalon-park"
                          >
                            <Image className="img-fluid" alt="" src={image3} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1 pill-custom">
                              Sold Out
                            </span>
                            <p className="text-dark m-0 py-2 text-primary text-center">
                              3BHK & 4BHK Apartments
                            </p>
                          </a>
                        </div>
                      </NavDropdown.Item>
                    </Col>

                    <Col md={3} xs={6} sm={6}>
                      <NavDropdown.Item
                        as={Link}
                        to="/projects/aspen-greens"
                        className="fs-5 fw-bold text-primary"
                      >
                        Aspen Greens
                        <div className="position-relative">
                          <a
                            className="text-decoration-none"
                            as={Link}
                            to="/projects/aspen-greens"
                          >
                            <Image className="img-fluid" alt="" src={image4} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1 pill-custom">
                              New Launch
                            </span>
                            <p className="text-dark m-0 py-2 text-primary text-center">
                              4BHK Villas
                            </p>
                          </a>
                        </div>
                      </NavDropdown.Item>
                    </Col>

                    <Col md={3} xs={6} sm={6}>
                      <NavDropdown.Item
                        href="/projects/great-acres"
                        className="fs-5 fw-bold text-primary"
                      >
                        Great Acres
                        <a
                          className="text-decoration-none"
                          as={Link}
                          to="/projects/great-acres"
                        >
                          <div className="position-relative">
                            <Image className="img-fluid" alt="" src={image5} />
                            <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger m-1 pill-custom">
                              New Launch
                            </span>
                            <p className="text-dark m-0 py-2 text-primary text-center">
                              Plots
                            </p>
                          </div>
                        </a>
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown> */}

              <Nav.Link href="#master-plan">Master  Plan & Floor Plans</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#virtual-tour">Virtual Tour</Nav.Link>
              {/* <Nav.Link as={Link} to="/blogs">blogs</Nav.Link> */}
            </Nav>
            {/* <Nav>
              <Nav.Link
                className="btn-sm btn-danger text-white"
                href="tel:080959 99000"
              >
                <i className="fa fa-phone-volume"></i> + 91 80959 99000
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrochureModal
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
        message="Please Fill in your details & Download the Complete Brochure"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default TopHeader;
