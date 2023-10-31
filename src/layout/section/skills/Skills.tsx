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
        <FlexWrapper justify="space-between" align="center" wrap="wrap">
          <Icon iconId={"figma"} />
          <Icon iconId={"html"} />
          <Icon iconId={"css"} />
          <Icon iconId={"typeScript"} viewBox="0 0 52 52" />
          <Icon iconId={"react"} />
          <Icon iconId={"styledComponents"} viewBox="0 0 52 52" />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 50px 0;
  background: ${theme.colors.secondaryBg};
`;
