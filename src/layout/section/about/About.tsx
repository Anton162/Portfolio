import React from "react";
import styled from "styled-components";
import { Slider } from "../../../components/slider/Slider";
import { Statistics } from "../../../components/statistics/Statistics";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styled/Theme";
import { Container } from "../../../components/Container";

export const About = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <FlexAboutWrapper>
          <Slider />
          <Statistics />
        </FlexAboutWrapper>
      </Container>
    </StyledAbout>
  );
};

const FlexAboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${theme.media.desktop} {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledAbout = styled.section`
  padding: 100px 0 100px 0;
  background: ${theme.colors.fourthBg};

  @media ${theme.media.desktop} {
    display: flex;
    flex-wrap: wrap;
  }
`;
