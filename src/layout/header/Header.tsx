import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Button } from "../../components/button/Button";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu />
      <Button />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;
