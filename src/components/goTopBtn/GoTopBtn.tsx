import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn = () => {
  return (
    <StyledGoTopBtn onClick={scroll.scrollToTop}>
      <Icon iconId="gotopbtn" height="20" width="19" viewBox="0 0 20 19" />
    </StyledGoTopBtn>
  );
};

const StyledGoTopBtn = styled.button`
  background-color: none;
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  transition: transform 0.3s;

  :hover {
    transform: scale(1.5);
  }
`;
