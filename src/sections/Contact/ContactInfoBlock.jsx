import React from "react";
import {Col, Row} from "react-bootstrap";
import {contactInfo} from "./contactData";
import ContactInfoCard from "./ContactInfoCard";
import { AnimatedComponent } from "./contact.styled";

const ContactInfoBlock = () => {
  return (
    <Row className="my-2">
      {contactInfo.map((item, idx) => (
        <Col
          sm={12}
          md={idx === 0 ? 12 : 6}
          lg={idx === 0 ? 6 : 3}
          className="text-center my-2"
          key={idx}
        >
          <AnimatedComponent>
            <ContactInfoCard {...item} />
          </AnimatedComponent>
        </Col>
      ))}
    </Row>
  );
};

export default ContactInfoBlock;
