
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/projects/avalon-park/3bhk/type-d1-3-bed-1361-sq-ft.png";
import Image2 from "../../images/projects/avalon-park/3bhk/type-e1-3-bed-1536-sq-ft.png";
import Image3 from "../../images/projects/avalon-park/3bhk/type-e2-3-bed-1599-sq-ft.png";
import Image4 from "../../images/projects/avalon-park/3bhk/type-e3-3-bed-1620-sq-ft.png";
import Image5 from "../../images/projects/avalon-park/3bhk/type-e7-3-bed-1657-sq-ft.png";
import Image6 from "../../images/projects/avalon-park/3bhk/type-f3-3-bed-1898-sq-ft.png";
import Image7 from "../../images/projects/avalon-park/3bhk/type-f4-3-bed-1898-sq-ft.png";

const ThreeBhk = () => {
  const ThreeBHKImages = [
    
    { id: 1, imgName: Image1, alt: "", tag: "Type-D1 3-Bed" },
    { id: 2, imgName: Image2, alt: "", tag: "Type-E1 3-Bed" },
    { id: 3, imgName: Image3, alt: "", tag: "Type-E2 3-Bed" },
    { id: 4, imgName: Image4, alt: "", tag: "Type-E3 3-Bed" },
    { id: 5, imgName: Image5, alt: "", tag: "Type-E7 3-Bed" },
    { id: 6, imgName: Image6, alt: "", tag: "Type-F3 3-Bed" },
    { id: 7, imgName: Image7, alt: "", tag: "Type-F4 3-Bed" },
    
  ];

  return (
    <div>
      <Container fluid className="ps-0 pe-0">
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3">
              {ThreeBHKImages.map((item) => (
                <Col md={3} xs={6} sm={6} key={item.id}>
                  <div className="m-1 text-center border border-dark p-1 rounded">
                    <a href={item.imgName}>
                      <Image
                        src={item.imgName}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <h6 className="text-center"> {item.tag} </h6>
                </Col>
              ))}
            </Row>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </div>
  );
};

export default ThreeBhk;
