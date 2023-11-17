import React from "react";
import SectionContainer from "../../components/SectionContainer";
import ServicesBlock from "./ServicesBlock";
import { SectionHeadStyled } from "./Services.style";

const ServicesSection = () => {
  return (
    <SectionContainer id={"services"} secName={"services-sec"}>
      <SectionHeadStyled>
      <span className="back-head">services</span>
      <h2 className="sec-head">services</h2>
      <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
    </SectionHeadStyled>
      <ServicesBlock />
    </SectionContainer>
  );
};

export default ServicesSection;
