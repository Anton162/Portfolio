import React from "react";
import styled from "styled-components";
import { Slider } from "../../../components/slider/Slider";
import { Statistics } from "../../../components/statistics/Statistics";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styled/Theme";
import { Container } from "../../../components/Container";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper justify={"space-between"}>
          <Slider />
          <Statistics />
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding: 100px 0 100px 0;
  background: ${theme.colors.fourthBg};
`;
