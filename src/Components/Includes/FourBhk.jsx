
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/projects/avalon-park/4bhk/type-g1-4-bed-2204-sq-ft.png";
import Image2 from "../../images/projects/avalon-park/4bhk/type-g2-4-bed-2290-sq-ft.png";

const FourBhk = () => {
  const ThreeBHKImages = [
    
    
    { id: 1, imgName: Image1, alt: "", tag: "Type-G1 4-Bed" },
    { id: 2, imgName: Image2, alt: "", tag: "Type-G2 4-Bed" },];

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

export default FourBhk;
