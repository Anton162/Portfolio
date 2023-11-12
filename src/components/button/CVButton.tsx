import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styled/Theme";

export const DowloadButton = () => {
  return (
    <StyledButton>
      <LinkCv
        target="_blank"
        href="https://drive.google.com/file/d/1rXSJK2kFRdwXFDqi36PIxlzX7D8l0plF/view?usp=sharing"
      >
        <Icon
          iconId="download"
          height="20"
          width="20"
          viewBox="0 0 20px 20px"
        />
        Download CV
      </LinkCv>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 20px 30px;
  background: none;
  border: none;
  color: ${theme.colors.fontMain};
  font-size: 20px;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
  transition: transform 0.3s;

  :hover {
    background-color: ${theme.colors.cardSecondaryBg};
    transform: scale(1.1);
  }
  @media ${theme.media.mobile} {
    font-size: 15px;
    padding: 15px 25px;
  }
`;

const LinkCv = styled.a`
  all: unset;
  display: flex;
  align-items: center;
  gap: 5px;
`;
