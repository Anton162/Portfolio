import React from "react";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";
import { theme } from "../../../styled/Theme";

type CardPropsType = {
  iconId: string;
  title?: string;
};

export const Card = (props: CardPropsType) => {
  return (
    <StyledCard>
      <Icon iconId={props.iconId} width="20" height="20" viewBox="0 0 30 30" />
      <CardText>{props.title}</CardText>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 288px;
  height: 295px;
  background-color: ${theme.colors.cardBg};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 0 10px 10px;
  position: relative;
  transition: background-color 0.3s;
  gap: 15px;

  &:hover {
    background-color: ${theme.colors.cardSecondaryBg};
  }
`;

const CardText = styled.h4`
  width: 106px;
  color: ${theme.colors.fontCard};
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;
