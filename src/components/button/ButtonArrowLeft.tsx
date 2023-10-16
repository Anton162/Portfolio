import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const ButtonArrowLeft = () => {
  return (
    <ButtonArrow>
      <Icon iconId="arrow-left" width="26" height="24" viewBox="0 0 30 30" />
    </ButtonArrow>
  );
};

const ButtonArrow = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  cursor: pointer;
`;
