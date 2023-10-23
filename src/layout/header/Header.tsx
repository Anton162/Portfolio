import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Button } from "../../components/button/Button";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const items = ["Home", "About", "Services", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-evenly" align="center">
          <Logo />
          <HeaderMenu menuItems={items} />
          <MobileMenu menuItems={items} />
          <Button />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 10px 0;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
`;
