import React from "react";
import styled from "styled-components";
import { Slider } from "../../../components/slider/Slider";
import { Statistics } from "../../../components/statistics/Statistics";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const About = () => {
  return (
    <StyledAbout>
      <FlexWrapper justify={"space-evenly"} margin_top="0px" margin="0px">
        <Slider />
        <Statistics />
      </FlexWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  background: rgba(34, 42, 54, 0.95);
`;
