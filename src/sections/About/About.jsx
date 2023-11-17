import React from "react";
import {Col, Image} from "react-bootstrap";
import SectionContainer from "../../components/SectionContainer";
import AboutSponsor from "./AboutSponsor";
import {AiOutlineCheckCircle} from "react-icons/ai";
import {CardItemStyled, RowReversedStyled, StyledRow} from "./About.styled";
import aboutImage from "../../assets/about.jpg";


const About = () => {
  return (
    <>
      <SectionContainer id={"about"} secName={"about-sec"}>
        <RowReversedStyled className="my-2">
          <Col lg={6} className="mb-3">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
            <li className="mb-3">
                  <AiOutlineCheckCircle
                    className="me-1"
                    size={24}
                    color={"var(--ds-blood)"}
                  />
                 Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li className="mb-3">
                  <AiOutlineCheckCircle
                    className="me-1"
                    size={24}
                    color={"var(--ds-blood)"}
                  />
              Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li className="mb-3">
                  <AiOutlineCheckCircle
                    className="me-1"
                    size={24}
                    color={"var(--ds-blood)"}
                  />
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </Col>
          <Col lg={6} className="mb-3">
            <Image
              src={aboutImage}
              alt="about-img"
              width="100%"
              height="auto"
            />
          </Col>
        </RowReversedStyled>
        {/*AboutBlocks  */}
        <div className="cards-block">
      
      <StyledRow>
              <Col sm={12} md={6} lg={4}>
                <CardItemStyled >
                    <span className="card-num">01</span>
                  <h4>Lorem Ipsum</h4>
                  <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                </CardItemStyled>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <CardItemStyled >
                    <span className="card-num">02</span>
                  <h4>Repellat Nihil</h4>
                  <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                </CardItemStyled>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <CardItemStyled >
                    <span className="card-num">03</span>
                  <h4>Ad ad velit qui</h4>
                  <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                </CardItemStyled>
              </Col>
          </StyledRow>
      
    </div>
      </SectionContainer>
      <AboutSponsor />
    </>
  );
};

export default About;
