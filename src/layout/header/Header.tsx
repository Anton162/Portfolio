import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Button } from "../../components/button/Button";
import { Container } from "../../components/Container";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { theme } from "../../styled/Theme";

const items = ["Home", "About", "Services", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Logo />
          <HeaderMenu menuItems={items} />
          <MobileMenu menuItems={items} />
          <Button />
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${theme.media.tablet} {
    justify-content: center;
  }
`;

const StyledHeader = styled.header`
  padding: 10px 0;
  width: 100%;
  position: fixed;
  top: -500px;
  right: 0;
  left: 0;
  z-index: 9999;

  @media ${theme.media.tablet} {
    background-color: ${theme.colors.primaryBg};
  }
`;
