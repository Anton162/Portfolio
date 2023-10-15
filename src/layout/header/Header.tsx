import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Button } from "../../components/button/Button";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper align={"center"} justify={"space-between"}>
        <Logo />
        <Menu />
        <Button />
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  margin: 0 auto;
  width: 100%;
  display: flex;
  position: fixed;
`;
