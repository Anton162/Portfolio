import styled from "styled-components";
import { theme } from "../../styled/Theme";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${theme.media.tablet} {
    justify-content: center;
  }
`;

const Header = styled.header`
  padding: 10px 0;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  @media ${theme.media.tablet} {
    transition: transform 0.3s, opacity 0.3s;
  }

  &.scrolled {
    position: fixed;
    transform: translateY(-100%);
    transition: transform 1s ease;
  }
`;

export const S = {
  Header,
  HeaderWrapper,
};
