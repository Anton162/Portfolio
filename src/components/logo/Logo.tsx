import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../styled/Theme";

export const Logo = () => {
  return (
    <LogoLink href="#">
      <Icon iconId={"twitter"} width="50" height="50" viewBox="0 0 50px 50px" />
    </LogoLink>
  );
};

const LogoLink = styled.a`
  align-self: center;
  margin-top: 25px;

  @media ${theme.media.tablet} {
    display: none;
  }
`;
