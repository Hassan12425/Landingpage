import React from "react";
import {Col, Row} from "react-bootstrap";
import TeamCard from "./TeamCard";
import {teams} from "./teamsData";
import { AnimatedDiv } from "./team.styled";
const TeamBlock = ({idx}) => {
  return (
    <div>
      <Row>
        {teams.map((item, idx) => (
          <Col sm={12} md={6} lg={4} className="text-center my-3" key={idx}>
           <AnimatedDiv idx={idx}>
              <TeamCard {...item} />
            </AnimatedDiv>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TeamBlock;
