import { Container, Row, Col, Image } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../images/projects/avalon-park/masterplan.png";
import Image2 from "../../images/projects/avalon-park/numbering-plan.png";
import Image3 from "../../images/projects/avalon-park/3bhk/type-d1-3-bed-1361-sq-ft.png";
import Image4 from "../../images/projects/avalon-park/3bhk/type-e1-3-bed-1536-sq-ft.png";
import Image5 from "../../images/projects/avalon-park/3bhk/type-e2-3-bed-1599-sq-ft.png";
import Image6 from "../../images/projects/avalon-park/3bhk/type-e3-3-bed-1620-sq-ft.png";
import Image7 from "../../images/projects/avalon-park/3bhk/type-e7-3-bed-1657-sq-ft.png";
import Image8 from "../../images/projects/avalon-park/3bhk/type-f3-3-bed-1898-sq-ft.png";
import Image9 from "../../images/projects/avalon-park/3bhk/type-f4-3-bed-1898-sq-ft.png";
import Image11 from "../../images/projects/avalon-park/4bhk/type-g1-4-bed-2204-sq-ft.png";
import Image12 from "../../images/projects/avalon-park/4bhk/type-g2-4-bed-2290-sq-ft.png";

const AllImages = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "Master Plan" },
    { id: 2, imgName: Image2, alt: "", tag: "Numbering Plan" },
    { id: 3, imgName: Image3, alt: "", tag: "Floor Plan" },
    { id: 4, imgName: Image4, alt: "", tag: "Typical Floor Plan" },
    { id: 5, imgName: Image5, alt: "", tag: "3BHK Type D2" },
    { id: 6, imgName: Image6, alt: "", tag: "3bhk Type E8" },
    { id: 7, imgName: Image7, alt: "", tag: "3bhk Type E8" },
    { id: 8, imgName: Image8, alt: "", tag: "3bhk Type E8" },
    { id: 9, imgName: Image9, alt: "", tag: "3BHK Type F1" },
    { id: 11, imgName: Image11, alt: "", tag: "3BHK Type F2" },
    { id: 12, imgName: Image12, alt: "", tag: "3BHK Type F2" },
  ];

  return (
    <div>
      <Container fluid className="ps-0 pe-0">
        <SimpleReactLightbox>
          <SRLWrapper>
            <Row className="g-3 justify-content-center">
              {images.map((item) => (
                <Col md={4} xs={6} sm={6} key={item.id}>
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

export default AllImages;
