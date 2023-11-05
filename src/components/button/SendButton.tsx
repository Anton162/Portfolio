import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styled/Theme";
import { Icon } from "../icon/Icon";

export const SendButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyleButton
      type="submit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Send
      {isHovered && (
        <Icon iconId="arrow-right" width="26" height="24" viewBox="0 0 30 30" />
      )}
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
  gap: 20px;
  background: none;
  border: none;
  color: ${theme.colors.fontMain};
  cursor: pointer;
  margin-top: 40px;
  padding: 10px;
  transition: transform 0.3s;

  :hover {
    color: ${theme.colors.cardSecondaryBg};
    transform: scale(1.2);
  }
  @media ${theme.media.mobile} {
    font-size: 15px;
    padding: 15px 25px;
  }
`;
