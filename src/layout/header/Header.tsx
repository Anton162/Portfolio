import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Button } from "../../components/button/Button";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper align={"center"} justify={"space-evenly"}>
        <Logo />
        <Menu />
        <Button />
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 140px;
  position: fixed;
  z-index: 1;
`;
