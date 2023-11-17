import React from "react";
import SectionContainer from "../../components/SectionContainer";
import TeamBlock from "./TeamBlock";
import { SectionHeadStyled } from "./team.styled";

const Team = () => {
  return (
    <SectionContainer id={"team"} secName={"team-sec"}>
      <SectionHeadStyled>
        <span className="back-head">team</span>
        <h2 className="sec-head">team</h2>
        <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
      </SectionHeadStyled>
      <TeamBlock />
    </SectionContainer>
  );
};

export default Team;
