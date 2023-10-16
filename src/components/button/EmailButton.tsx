import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const EmailButton = () => {
  return (
    <StyledButton>
      <Icon iconId="mail" height="20" width="20" viewBox="0 0 20px 20px" />
      Email me
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: inline-flex;
  padding: 20px 40px;
  align-items: center;
  gap: 10px;
  background: var(--pp1-purple, #676cdb);
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  border: none;
  cursor: pointer;
`;
