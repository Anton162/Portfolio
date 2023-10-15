import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexWrapper wrap={"wrap"}>
        <StyledSkill>
          <Icon iconId={"figma"} />
          <Icon iconId={"html"} />
          <Icon iconId={"css"} />
          <Icon iconId={"sass"} />
          <Icon iconId={"react"} />
        </StyledSkill>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background: #000;
`;

const StyledSkill = styled.image`
  display: flex;
  justify-content: space-between;
  gap: 170px;
`;
