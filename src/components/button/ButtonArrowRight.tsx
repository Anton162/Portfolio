import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const ButtonArrowRight = () => {
  return (
    <ButtonArrow>
      <Icon iconId="arrow-right" width="26" height="24" viewBox="0 0 30 30" />
    </ButtonArrow>
  );
};

const ButtonArrow = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
