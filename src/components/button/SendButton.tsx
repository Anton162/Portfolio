import React from "react";
import styled from "styled-components";
import { theme } from "../../styled/Theme";
import { Icon } from "../icon/Icon";

export const SendButton = () => {
  return (
    <StyleButton>
      Send
      <Icon iconId="arrow-right" width="26" height="24" viewBox="0 0 30 30" />
    </StyleButton>
  );
};

const StyleButton = styled.button`
  width: 147px;
  font-size: 30px;
  font-weight: 500;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  background: none;
  border: none;
  color: ${theme.colors.fontMain};
  cursor: pointer;
  margin-top: 40px;

  :hover {
    color: ${theme.colors.cardSecondaryBg};
  }
`;
