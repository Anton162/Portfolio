import React from "react";
import styled from "styled-components";
import { Slider } from "../../../components/slider/Slider";
import { Statistics } from "../../../components/statistics/Statistics";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const About = () => {
  return (
    <StyledAbout>
      <FlexWrapper justify={"space-evenly"}>
        <Slider />
        <Statistics />
      </FlexWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  height: 650px;
  padding: 100px 0 100px 0;
  background: rgba(34, 42, 54, 0.95);
`;
