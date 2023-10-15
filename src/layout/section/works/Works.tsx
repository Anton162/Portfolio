import React from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Works = () => {
  return (
    <StyledWorks>
      <FlexWrapper>
        <ExperienceSkill>
          <Text>1+</Text>
          <ExperienceText>Years Experience Working</ExperienceText>
        </ExperienceSkill>
        <CardSection>
          <SecondTitle>
            Front-End Developer, React Specialist, with a Focus on UI/UX,
            experienced in building responsive web applications and user
            interfaces, and proficient in modern web development technologies
            and tools.
          </SecondTitle>
          <CardBox>
            <Card iconId={"computer"} title={"Front End Developer"} />
            <Card iconId={"ux"} title={"UI/UX Designer"} />
            <Card iconId={"ux"} title={"UI/UX Designer"} />
          </CardBox>
        </CardSection>
      </FlexWrapper>
    </StyledWorks>
  );
};

const CardBox = styled.div`
  display: flex;
  gap: 15px;
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
