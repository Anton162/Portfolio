import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styled/Theme";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Icon iconId={"figma"} />
          <Icon iconId={"html"} />
          <Icon iconId={"css"} />
          <Icon iconId={"sass"} />
          <Icon iconId={"react"} />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  align-items: center;
  padding: 50px 0;
  height: 200px;
  background: ${theme.colors.secondaryBg};
`;
