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
  padding: 50px 0 50px 0;
  height: 100px;
  background: #000;
`;
