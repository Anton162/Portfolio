import React from "react";
import styled from "styled-components";
import { theme } from "../../styled/Theme";

export const Button = () => {
  return <StyledButton>Contact Me</StyledButton>;
};

const StyledButton = styled.button`
  height: 50px;
  width: 157px;
  background: ${theme.colors.fontSecondary};
  font-size: 20px;
  color: ${theme.colors.fontMain};
  font-weight: 500;
  border: none;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;

  @media ${theme.media.tablet} {
    display: none;
  }

  :hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
`;
