import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const DowloadButton = () => {
  return (
    <StyledButton>
      <Icon iconId="download" height="20" width="20" viewBox="0 0 20px 20px" />
      Download CV
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: inline-flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
`;
