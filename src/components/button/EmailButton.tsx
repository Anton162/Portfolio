import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styled/Theme";

export const EmailButton = () => {
  return (
    <StyledButton>
      <LinkMail target="_blank" href="mailto:antonnikulich.petukh@gmail.com">
        <Icon iconId="mail" height="20" width="20" viewBox="0 0 20px 20px" />
        Email me
      </LinkMail>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 20px 30px;
  background: none;
  border: none;
  color: ${theme.colors.fontMain};
  font-size: 20px;
  font-weight: 400;
  transition: transform 0.3s;
  cursor: pointer;

  :hover {
    background-color: ${theme.colors.cardSecondaryBg};
    transform: scale(1.1);
  }

  @media ${theme.media.mobile} {
    font-size: 15px;
    padding: 15px 25px;
  }
`;

const LinkMail = styled.a`
  all: unset;
  display: flex;
  align-items: center;
  gap: 5px;
`;
