import React from "react";
import CustomButton from "../../components/CustomButton";
import {AnimatedComponent, HomeSectionStyled} from "./home.styled";
import homeImg from "../../assets/home-bg.jpg";
const Home = () => {
  return (
    <HomeSectionStyled
      id={"home"}
      className="home-sec d-flex align-items-center"
      style={{
        background: `url(${homeImg}) top center no-repeat`,
        height: "calc(100vh - 100px)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        
      }}
    >
      <AnimatedComponent className="home-container">
        <h1>WELCOME TO MY WEBSITE</h1>
        <CustomButton type="btn-on-img">GET STARTED</CustomButton>
      </AnimatedComponent>
    </HomeSectionStyled>
  );
};

export default Home;
