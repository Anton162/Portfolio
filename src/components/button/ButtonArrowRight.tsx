import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

interface ButtonArrowRightProps {
  onClick: () => void;
}

export const ButtonArrowRight: React.FC<ButtonArrowRightProps> = ({
  onClick,
}) => {
  return (
    <ButtonArrow onClick={onClick}>
      <Icon iconId="arrow-right" width="26" height="24" viewBox="0 0 30 30" />
    </ButtonArrow>
  );
};

const ButtonArrow = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
