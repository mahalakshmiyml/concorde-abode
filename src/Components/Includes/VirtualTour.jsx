import React from "react";
import {Container} from "react-bootstrap";

const VirtualTour = () => {
  return (
    <div id="virtual-tour" className="py-3 py-md-5 bg-light">
      <Container>
        <h2 className="py-3 text-primary text-center fs-3">
           Virtual Tour
        </h2>
        {/* <Row className="justify-content-center gy-3">
          <Col md={6}>
            <Ratio aspectRatio="16x9">
              <video loop controls>
                <source src={covervid} type="video/mp4" />
                Your browser does not support the video tag. I suggest you
                upgrade your browser.
                <source src={covervidtwo} type="video/ogg" />
                Your browser does not support the video tag. I suggest you
                upgrade your browser.
              </video>
            </Ratio> 
            {/* <ReactPlayer src="http://webmillionservices.com/now/video-1.mp4"/> */}
          {/* </Col> */}
          {/* <Col md={6}>
          <Ratio aspectRatio="16x9">
              <video loop controls>
                <source src={covervid1} type="video/mp4" />
                Your browser does not support the video tag. I suggest you
                upgrade your browser.
                <source src={covervidtwo} type="video/ogg" />
                Your browser does not support the video tag. I suggest you
                upgrade your browser.
              </video>
            </Ratio>
          </Col> */}
        {/* </Row> */} 
      </Container>
    </div>
  );
};

export default VirtualTour;
