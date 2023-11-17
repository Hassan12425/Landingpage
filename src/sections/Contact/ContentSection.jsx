import React from "react";
import SectionContainer from "../../components/SectionContainer";
import ContactInfoBlock from "./ContactInfoBlock";
import ContactMapFormBlock from "./ContactMapFormBlock";
import { SectionHeadStyled } from "../Team/team.styled";

const ContactSection = () => {
  return (
    <SectionContainer id={"contact"} secName={"contact-sec"}>
       <SectionHeadStyled>
        <span className="back-head">CONTACT</span>
        <h2 className="sec-head">CONTACT</h2>
        <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
      </SectionHeadStyled>
      <ContactInfoBlock />
      <ContactMapFormBlock />
    </SectionContainer>
  );
};

export default ContactSection;
