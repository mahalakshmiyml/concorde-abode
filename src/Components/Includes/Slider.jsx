import React, { useState } from "react";
import { Container, Col, Image, Row, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Image1 from "../../images/slider/slider-1.png";
import Image2 from "../../images/slider/slider-2.png";
// import Logo from "../../images/projects/avalon-park-@-the-prestige-city-logo.png"
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
  return ( <div>
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
      <Container className="bg-white shadow p-3 position-absolute top-50 start-50 translate-middle">
        <Row className="justify-content-center">
          <Col
            md={4}
            className="align-self-center d-none d-md-block"
          >
            <div className="text-center">
              {/* <Image
                src={Logo}

                alt=""
                className="img-fluid"
                style={{ height: "125px" }}
              /> */}
            </div>
          </Col>
          <Col md={8} className="align-self-center">
            <Row className="">
              <Col md={8} className="">
                <div className="m-1 text-center text-md-start">
                  <h4>Concorder Abode</h4>
                  <p className="m-0 text-center text-md-start"></p>
                    <p className="mb-0 text-center text-md-start">Electronic, Bangalore</p>
                    <p className="mb-0 text-center text-md-start">79.99* Lac Onwards</p>
                  
                </div>
              </Col>
              <Col md={4} className="align-self-center">
                <div className="text-center text-uppercase my-1">
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

    {/* <Modals
      show={show}
      handleClose={handleClose}
      title="Download Brouchure"
    /> */}
  </div>
  )
}

export default Slider
