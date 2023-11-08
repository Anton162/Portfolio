import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";
import { theme } from "../../styled/Theme";

export const GoTopBtn = () => {
  const [showBtnm, setshowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshowBtn(true);
      } else {
        setshowBtn(false);
      }
    });
  });
  return (
    <>
      {showBtnm && (
        <StyledGoTopBtn onClick={scroll.scrollToTop}>
          <Icon iconId="gotopbtn" height="20" width="19" viewBox="0 0 20 19" />
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  background-color: none;
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  transition: transform 0.3s;

  @media ${theme.media.mobile} {
    right: 15px;
    bottom: 15px;
  }

  :hover {
    transform: scale(1.5);
  }
`;
