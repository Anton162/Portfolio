import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

import { theme } from "../../../styled/Theme";
import { Container } from "../../../components/Container";

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <WorksWrapper>
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
        </WorksWrapper>
      </Container>
    </StyledWorks>
  );
};

const WorksWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${theme.media.desktop} {
    flex-direction: column;
  }
`;

const CardBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  @media ${theme.media.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledWorks = styled.section`
  padding: 100px 0 100px 0;
  background: ${theme.colors.thirdBg};
`;

const SecondTitle = styled.h2`
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 700;

  @media ${theme.media.desktop} {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 35px;
    padding: 0 20px;
  }
`;

const CardSection = styled.div`
  max-width: 810px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media ${theme.media.desktop} {
    max-width: 100%;
  }
`;

const ExperienceSkill = styled.div`
  max-width: 210px;
  margin-top: 21px;

  @media ${theme.media.desktop} {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 10px;
  }
`;

const Text = styled.span`
  color: ${theme.colors.fontSecondary};
  font-family: Playfair Display;
  font-size: 100px;
  font-weight: 700;

  @media ${theme.media.desktop} {
    font-size: 80px;
  }
  @media ${theme.media.tablet} {
    font-size: 60px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const ExperienceText = styled.h2`
  font-family: Playfair Display;
  font-size: 40px;
  font-weight: 700;

  @media ${theme.media.tablet} {
    font-size: 35px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
