import React, { useEffect, useState } from "react";
import { Logo } from "../../components/logo/Logo";
import { Button } from "../../components/button/Button";
import { Container } from "../../components/Container";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

const items = ["Home", "About", "Services", "Contacts"];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    if (window.innerWidth > 768) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (window.innerWidth > 768) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <S.Header className={isScrolled ? "scrolled" : ""}>
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
