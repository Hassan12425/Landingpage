import React from "react";
import {Col, Row} from "react-bootstrap";
import { GrayImage,Container} from "./About.styled";
import sponser1 from "../../assets/client-1.png";
import sponser2 from "../../assets/client-2.png";
import sponser3 from "../../assets/client-3.png";
import sponser4 from "../../assets/client-4.png";
import sponser5 from "../../assets/client-5.png";
import sponser6 from "../../assets/client-6.png";
const AboutSponsor = () => {
  return (
    <div
      className="sponsor-container py-5"
      style={{background: "var(--ds-light-5)"}}
    >
      <Container>
        <Row className="text-center" >
            <Col>
                <GrayImage
                  src={sponser1}
                  alt="sponsor-img"
                  width="50%"
                  height="auto"
                />
            </Col>
            <Col>
                <GrayImage
                  src={sponser2}
                  alt="sponsor-img"
                  width="50%"
                  height="auto"
                />
            </Col>
            <Col>
                <GrayImage
                  src={sponser3}
                  alt="sponsor-img"
                  width="50%"
                  height="auto"
                />
            </Col>
            <Col >
                <GrayImage
                  src={sponser4}
                  alt="sponsor-img"
                  width="50%"
                  height="auto"
                />
            </Col>
            <Col>
                <GrayImage
                  src={sponser5}
                  alt="sponsor-img"
                  width="50%"
                  height="auto"
                />
            </Col>
            <Col>
                <GrayImage
                  src={sponser6}
                  alt="sponsor-img"
                  width="50%"
                  height="auto"
                />
            </Col>

         
        </Row>
      </Container>
    </div>
  );
};

export default AboutSponsor;
