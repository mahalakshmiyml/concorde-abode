import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import FooterLogo from "../../images/footer.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-2">
      <Container>
        <Row className="justify-content-center">
          <Col md={2} className="align-self-center">
            <div className="text-center">
              <Image src={FooterLogo} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col md={10} className="pt-3 pb-3 pt-md-2 pb-md-2">
            <p className="text-white mb-0">
            Disclaimer : The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
