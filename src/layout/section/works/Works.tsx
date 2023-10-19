import React from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styled/Theme";
import { Container } from "../../../components/Container";

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <FlexWrapper>
          <ExperienceSkill>
            <Text>1+</Text>
            <ExperienceText>Years Experience Working</ExperienceText>
          </ExperienceSkill>
          <CardSection>
            <SecondTitle>
              Developer and Designer, specialized in UI/UX and Web Developer
            </SecondTitle>
            <CardBox>
              <Card iconId={"computer"} title={"Front End Developer"} />
              <Card iconId={"ux"} title={"UI/UX Designer"} />
              <Card iconId={"ux"} title={"UI/UX Designer"} />
            </CardBox>
          </CardSection>
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const CardBox = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledWorks = styled.section`
  height: 659px;
  padding: 100px 0 100px 0;
  background: ${theme.colors.thirdBg};
`;

const SecondTitle = styled.h2`
  width: 800px;
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

const ExperienceSkill = styled.div`
  margin-top: 21px;
`;

const Text = styled.span`
  font-family: Playfair Display;
  color: ${theme.colors.fontSecondary};
  font-size: 100px;
  font-weight: 700;
`;

const ExperienceText = styled.h2`
  font-family: Playfair Display;
  font-size: 40px;
  font-weight: 700;
`;
