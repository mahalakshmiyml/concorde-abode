import React, { useState } from "react";
import { Container, Col, Image, Row, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Image1 from "../../images/slider/baner-1.png";
import Image2 from "../../images/slider/baner-2.png";
import Logo from "../../images/logo-1.png";
import BrochureModal from "./BrochureModal";
// import Modals from "./Modals";

const Slider = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const associations = [
    {
      id: 1,
      ImageUrl: Image1,
      alt: "",
    },
    {
      id: 2,
      ImageUrl: Image2,
      alt: "",
    },
  ];

  const options = {
    rewind: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 2,
        nav: false,
        loop: false,
      },
    },
  };
  return (
    <div>
      <OwlCarousel options={options}>
        {associations.map((item, index) => (
          <div className="mx-2" key={index}>
            <Row>
              <Col md={12}>
                <div className="text-center">
                  <Image
                    src={item.ImageUrl}
                    alt={item.alt}
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </OwlCarousel>
      <div className="bg-light position-relative rounded" id="custom-content">
        <Container className="bg-white shadow rounded p-3 position-absolute top-50 start-50 translate-middle">
          <Row className="justify-content-center">
            <Col md={2} className="align-self-center d-none d-md-block">
              <div className="text-center text-md-start">
                <Image src={Logo} alt="" className="img-fluid rounded" />
              </div>
            </Col>
            <Col md={10} className="align-self-center">
              <Row className="">
                <Col md={8} sm={6} xs={8} className="">
                  <div className="m-1">
                    <h4>Concorde Abode 99</h4>
                    <p className="m-0"></p>
                    <p className="mb-0">
                     Off Hosur Sarjapur Road, Bangalore
                    </p>
                    <p className="mb-0 fw-bold">
                      ₹ 2 - 3.8Cr* Onwards
                    </p>
                  </div>
                </Col>
                <Col md={4} sm={6} xs={4} className="align-self-center">
                  <div className="text-end text-md-center text-uppercase my-1">
                    <Button
                      variant="dark"
                      onClick={handleShow}
                      className="my-1"
                    >
                      Download Brouchure
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

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

export default Slider;
