import React, { useState } from "react";
import { Accordion, Button, Col, Container, Row, Table } from "react-bootstrap";
import Contact from "./Includes/Contact";
import FixedIcons from "./Includes/FixedIcons";
import Info from "./Includes/Info";
import MasterPlan from "./Includes/MasterPlan";
import Slider from "./Includes/Slider";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Slider />
      <div className="py-3 py-md-3">
        <Container fluid>
          <Row>
            <Col md={9}>
              <section id="overview" className="py-3 py-md-5 bg-light">
                <Container fluid className="ps-0 pe-0">
                  <Row>
                    <Col md={12}>
                      <h2 className="pb-2 text-center py-2 py-md-5 fs-3">
                        Project Highlights
                      </h2>
                      <span className="bg-danger position-absolute start-50 span-line"></span>
                      <Table className="table table-bordered align-middle">
                        <tbody>
                          <tr>
                            <th>RERA No</th>
                            <td>PR/210928/004316</td>
                          </tr>
                          <tr>
                            <th>Development Size</th>
                            <td>12.7 Acres</td>
                          </tr>

                          <tr>
                            <th>Total No. of Units</th>
                            <td>159 units</td>
                          </tr>
                          <tr>
                            <th>No. of Rooms</th>
                            <td>3 & 4BHK</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Container>
              </section>

              <section className="py-2 py-md-2">
                <Container fluid className="ps-0 pe-0">
                  <Row>
                    <Col md={12}>
                      <h2 className="py-2 text-center fs-3">
                        About Concorde Abode 99
                      </h2>
                      <p>
                        A bespoke suit that doesn’t just fit, but embraces you
                        snugly. A sharp pair of shoes that are meant to carry
                        you and you alone. A stylish timepiece that seems born
                        to adorn your wrist. There’s something indescribably
                        special about things that are handcrafted for you.
                        Knowing that something isn’t made for the world, but for
                        you and you alone can be a really satisfying feeling!
                        Come, experience it at Concorde Abode 99.
                      </p>
                      <p>
                        Each villa at Concorde Abode 99 is fashioned to be a
                        seamless blend of luxury and technology. An efficient
                        floor layout complemented by a clear height of 10 feet
                        creates a living expanse where life thrives! The villa
                        is topped off with an expansive Recreational Deck that
                        has been crafted to play host to the best moments of
                        your life!
                      </p>
                      <p>
                        Your home at Concorde Abode 99 comes with a Club
                        Membership unlike any other! Here, the exclusive Club
                        Memberships also comes with part-ownership of the 15,000
                        sq. ft. multi-level Club Evolve!
                      </p>
                      <p>
                        Life at Concorde Abode 99 has been designed to not only
                        delight the residents, but also care for our planet.
                        Sustainable living measures like rainwater harvesting
                        and a self-sustainable water supply have been
                        implemented.
                      </p>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section id="master-plan" className="py-3 py-md-5 bg-light">
                <Container fluid>
                  <Row>
                    <Col md={12}>
                      <MasterPlan />
                    </Col>
                  </Row>
                </Container>
              </section>

              <section className="py-3 py-md-5" id="amenites">
                <Container fluid className="ps-0 pe-0">
                  <Row className="justify-content-center">
                    <h2 className="text-center py-2 py-md-3 fs-3">Amenities</h2>
                    <Col md={4} xs={6}>
                      <ul>
                        <li>E-Pod</li>
                        <li>Kids Play Area</li>
                        <li>Outdoor Gym</li>
                        <li>Community Garden</li>
                        <li>Contemplation Garden</li>

                        <li>Family Pavillion</li>
                        <li>Fruit Garden</li>
                        <li>Boot Camp</li>
                      </ul>
                    </Col>
                    <Col md={4} xs={6}>
                      <ul>
                        <li>Gym</li>
                        <li>Musical Garden</li>
                        <li>Mini Tennis Court</li>
                        <li>Ping Pong Court</li>
                        <li>Skating Rink</li>
                        <li>Sunken Seating</li>
                        <li>Swimming Pool</li>
                        <li>Sports Court</li>
                      </ul>
                    </Col>
                    <Col md={4} xs={6}>
                      <ul>
                        <li>Amphitheatre</li>
                        <li>Banquet</li>
                        <li>Billiards</li>
                        <li>Mini Theatre</li>
                        <li>Table Tennis</li>
                        <li>Bio Pond</li>
                        <li>Walkway Path</li>
                        <li>Open Cafe</li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section id="pricing" className="py-3 py-md-3 bg-light">
                <Container fluid>
                  <Row className="justify-content-center">
                    <Col md={12} xs={12}>
                      <div className="">
                        <h2 className="text-center py-3 fs-3">Pricing</h2>
                        <Table
                          responsive="sm"
                          className="align-middle text-center border-transparent"
                          striped
                          bordered
                          hover
                        >
                          <thead>
                            <tr>
                              <th>BHK</th>
                              <th>Area (Sq.ft)</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>3 & 4BHK </td>
                              <td>2178</td>
                              <td>
                                <Button
                                  variant="dark"
                                  size="sm"
                                  onClick={handleShow}
                                  className="my-3 custom-button"
                                >
                                  <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                                  Price Sheet
                                </Button>
                              </td>
                            </tr>
                            {/* <tr>
                              <td>4 BHK </td>
                              <td>3000</td>
                              <td>
                                <Button
                                  variant="dark"
                                  size="sm"
                                  onClick={handleShow}
                                  className="my-3 custom-button"
                                >
                                  <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                                  Price Sheet
                                </Button>
                              </td>
                            </tr> */}
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
              <section className="py-3 py-md-3">
                <Info />
              </section>
              <section id="location" className="py-3 py-md-3 bg-light">
                <Container fluid>
                  <h2 className="text-center py-md-3">Location</h2>
                  <Row className=" justify-content-center">
                    <Col md={12}>
                      {/* <div className="text-center">
              <Image src={Location} className="img-fluid" alt="" />
            </div> */}
                      <div className="text-center">
                        {/* <h2 className="text-center">Location Map</h2> */}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13085.16036445721!2d77.71660828620456!3d12.827668124444399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x277e0e5afc2fc786!2sConcorde%20Abode%2099!5e0!3m2!1sen!2sin!4v1652436398126!5m2!1sen!2sin"
                          width="100%"
                          height="450"
                        ></iframe>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </Col>
            <Col md={3}>
              <Contact />
            </Col>
          </Row>
        </Container>
      </div>

      <div id="virtual-tour" className="py-3 py-md-3 bg-light">
        <Container fluid>
          <Row className="justify-content-center">
            <h2 className="text-center py-3">Virtual Tour</h2>
            <Col md={6}>
              <iframe
                width="100%"
                height="330"
                src="https://www.youtube.com/embed/tZ8XuJRzAR4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </Container>

        <section id="faq" className="py-3 py-md-5">
          <Container>
            <Row className="justify-content-center">
              <h2 className=" py-3"> Frequently Asked Questions </h2>
              <Col md={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" className="mb-3">
                    <Accordion.Header>WHAT IS THE STARTING PRICE OF CONCORDE ABODE 99?</Accordion.Header>
                    <Accordion.Body>
                    The price of Concorde Abode 9 3 & 4 BHK premium Villa starts from INR 2 Cr*.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>WHERE IS CONCORDE ABODE 99 LOCATED?</Accordion.Header>
                    <Accordion.Body>
                    CONCORDE ABODE 99 is located Chandapura Dommasandra Road, Ramasagara Rd, Singena Agrahara, Bengaluru, Karnataka 560099
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col md={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" className="mb-3">
                    <Accordion.Header>WHAT IS THE TOTAL LAND AREA OF CONCORDE ABODE 99?</Accordion.Header>
                    <Accordion.Body>
                    The total land area of CONCORDE ABODE 99 is 12.7 acres.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="mb-3">
                    <Accordion.Header>WHAT ARE THE KEY AMENITIES AT CONCORDE ABODE 99?</Accordion.Header>
                    <Accordion.Body>
                    The amenities at CONCORDE ABODE 99 include E-Pod, Ping Pong Court, Outdoor Gym, Amphitheatre, Fruit Garden, Swimming Pool, Skating Rink, Billiards, Banquet and much more.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <FixedIcons />
    </>
  );
};

export default Home;
