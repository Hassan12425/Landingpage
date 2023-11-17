import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {FooterListLinksStyled, FooterNewsLetterStyled, FooterSquareStyled, FooterStyled, StyledInput} from "./footer.styled";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import CustomButton from "../../components/CustomButton";
import { MdKeyboardArrowRight } from "react-icons/md";


const Footer = () => {
  return (
    <>
      <FooterStyled>
        <Container>
          <hr />
          <Row className="py-3">
            <Col md={12} lg={4}>
            <FooterSquareStyled>
      <h3>MY WEBSITE</h3>
      <p className="mb-3">Supply Abbottabad</p>
      <p className="mb-1">Phone: +9234823698736</p>
      <p className="mb-1">Email: info@example.com</p>
      <ul>
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
      </ul>
    </FooterSquareStyled>
  
            </Col>
            <Col sm={12} md={6} lg={2}>
            <FooterListLinksStyled>
      <h4>Useful Links</h4>
      <ul>
          <li>
            <MdKeyboardArrowRight />
            Home
          </li>
          <li>
            <MdKeyboardArrowRight />
            About
          </li>
          <li>
            <MdKeyboardArrowRight />
            Services
          </li>
          <li>
            <MdKeyboardArrowRight />
            Contact
          </li>
      </ul>
    </FooterListLinksStyled>
            </Col>
            <Col sm={12} md={6} lg={2}>
            <FooterListLinksStyled>
      <h4>Our Services</h4>
      <ul>
          <li>
            <MdKeyboardArrowRight />
            Web Design
          </li>
          <li>
            <MdKeyboardArrowRight />
            Web Development
          </li>
          <li>
            <MdKeyboardArrowRight />
            Product Management
          </li>
          <li>
            <MdKeyboardArrowRight />
            Graphic Design
          </li>
      </ul>
    </FooterListLinksStyled>
            </Col>

{/* Footer NewsLetter section */}
            <Col md={12} lg={4}>
            <FooterNewsLetterStyled>
      <h4>Our Newsletter</h4>
      <p>
        Tamen quem nulla quae legam multos aute sint culpa legam noster magna
      </p>
      <div className="subscribe-form">
      <StyledInput type="text" placeholder="Enter text..." />
        <CustomButton type="regular-pricing-btn">Subscribe</CustomButton>
      </div>
    </FooterNewsLetterStyled>
            </Col>
{/* Footer NewsLetter section End Here */}
          </Row>
        </Container>
      </FooterStyled>
    </>
  );
};

export default Footer;
