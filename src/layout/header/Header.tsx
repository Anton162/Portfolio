import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Button } from "../../components/button/Button";
import { Container } from "../../components/Container";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

const items = ["Home", "About", "Services", "Contacts"];

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <S.HeaderWrapper>
          <Logo />
          <HeaderMenu menuItems={items} />
          <MobileMenu menuItems={items} />
          <Button />
        </S.HeaderWrapper>
      </Container>
    </S.Header>
  );
};
