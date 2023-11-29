import React from "react";
import styled, { keyframes } from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styled/Theme";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills id="skills">
      <Container>
        <SkillsWrapper>
          <IconWrapper>
            <Icon iconId={"figma"} />
          </IconWrapper>
          <IconWrapper>
            <Icon iconId={"html"} />
          </IconWrapper>
          <IconWrapper>
            <Icon iconId={"css"} />
          </IconWrapper>
          <IconWrapper>
            <Icon iconId={"typeScript"} viewBox="0 0 52 52" />
          </IconWrapper>
          <IconWrapper>
            <Icon iconId={"react"} />
          </IconWrapper>
          <IconWrapper>
            <Icon iconId={"styledComponents"} viewBox="0 0 52 52" />
          </IconWrapper>
        </SkillsWrapper>
      </Container>
    </StyledSkills>
  );
};

const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${theme.media.mobile} {
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const IconWrapper = styled.div`
  transition: transform 0.7s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    color: ${theme.colors.fontSecondary};
  }
`;

const StyledSkills = styled.section`
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 50px 0;
  background: ${theme.colors.secondaryBg};
  overflow: hidden;
`;
