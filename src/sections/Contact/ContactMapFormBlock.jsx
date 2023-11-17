import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import {Col, Row, Form} from "react-bootstrap";
import CustomButton from "../../components/CustomButton";
import {AnimatedComponent, AnimatedForm, FormStyled} from "./contact.styled";

const ContactMapFormBlock = () => {

  return (
    <Row>
      <Col lg={6} className="my-2">
        <AnimatedComponent>
        <div className="google-map">
          <iframe
            title="This is a unique title"
            width="100%"
            height="100%"
            id="gamp_canvas"
            src="https://www.google.com/maps?q=34.154121,73.235553&z=11&output=embed
            "
            style={{minHeight: "500px"}}
          />
        </div>
        </AnimatedComponent>
      </Col>
      <Col lg={6} className="my-2">
        <AnimatedForm>
        <FormStyled>
      <Row>
        <Col lg={6}>
          <Form.Control size="lg" type="text" placeholder="Your Name" />
        </Col>
        <Col lg={6}>
          <Form.Control size="lg" type="email" placeholder="Your Email" />
        </Col>
        <Col lg={12}>
          <Form.Control size="lg" type="text" placeholder="Subject" />
        </Col>
        <Col lg={12}>
          <Form.Control as="textarea" rows={5} placeholder="Message" />
        </Col>
      </Row>
      <div className="text-center">
        <CustomButton className="my-3" type={"regular-pricing-btn"}>
          Send Message
        </CustomButton>
      </div>
    </FormStyled>
        </AnimatedForm>
      </Col>
    </Row>
  );
};



export default ContactMapFormBlock;
