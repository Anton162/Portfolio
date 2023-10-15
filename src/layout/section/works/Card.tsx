import React from "react";
import { Icon } from "../../../components/icon/Icon";
import styled from "styled-components";

type CardPropsType = {
  iconId: string;
  title?: string;
};

export const Card = (props: CardPropsType) => {
  return (
    <StyledCard>
      <Icon iconId={props.iconId} />
      <CardText>{props.title}</CardText>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 288px;
  height: 295px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 10px;
  position: relative;
`;

const CardText = styled.h4``;
