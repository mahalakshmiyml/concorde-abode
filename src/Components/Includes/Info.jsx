import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import Modals from "./Modals"

const Info = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      id="information"
      className="pt-3 pb-3 pt-md-3 pb-md-3 px-3 rounded"
    >
      <Container fluid className="ps-0 pe-0">
        <Row className="border-start border-5 bg-white shadow border-dark p-2">
          <Col md={9}>
            <h2>Need more information?</h2>
            <p className="m-0">
              Don't hesitate to download the brochure to know more details of
              this project.
            </p>
          </Col>
          <Col md={3} className="align-self-center text-center">
            <Button variant="dark" onClick={handleShow} className="my-3">
              Enquire Now
            </Button>
          </Col>
        </Row>
      </Container>
      {/* <Modals
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      /> */}
    </div>
  );

};

export default Info;
