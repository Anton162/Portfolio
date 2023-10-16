import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexWrapper
        justify="space-between"
        align="center"
        margin="0px"
        margin_top="0px"
      >
        <Icon iconId={"figma"} />
        <Icon iconId={"html"} />
        <Icon iconId={"css"} />
        <Icon iconId={"sass"} />
        <Icon iconId={"react"} />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  height: 200px;
  padding-top: 50px;
  background: #000;
`;
