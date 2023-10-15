import React from "react";
import styled from "styled-components";

export const Button = () => {
  return <StyledButton>Contact Me</StyledButton>;
};

const StyledButton = styled.button`
  height: 50px;
  width: 157px;
  background: var(--pp1-purple, #676cdb);
  font-size: 20px;
  color: #fff;
  font-weight: 500;
`;
