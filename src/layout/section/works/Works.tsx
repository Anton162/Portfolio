import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

export const Works = () => {
  return (
    <StyledWorks>
      <ExperienceSkill>
        <Text>1+</Text>
        <ExperienceText>Years Experience Working</ExperienceText>
      </ExperienceSkill>
      <CardSection>
        <SecondTitle>
          Front-End Developer, React Specialist, with a Focus on UI/UX,
          experienced in building responsive web applications and user
          interfaces, and proficient in modern web development technologies and
          tools.
        </SecondTitle>
        <CardSect>
          <Card iconId={"computer"} title={"Front End Developer"} />
          <Card iconId={"ux"} title={"UI/UX Designer"} />
          <Card iconId={"ux"} title={"UI/UX Designer"} />
        </CardSect>
      </CardSection>
    </StyledWorks>
  );
};

const CardSect = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const StyledWorks = styled.section`
  background: #222a36;
  display: flex;
  justify-content: space-between;
`;

const SecondTitle = styled.h2`
  width: 800px;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 700;
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ExperienceSkill = styled.div``;

const Text = styled.span`
  color: var(--pp1-purple, #676cdb);
  font-size: 100px;
  font-weight: 700;
`;

const ExperienceText = styled.h2`
  color: #fff;
  font-size: 40px;
  font-weight: 700;
`;
