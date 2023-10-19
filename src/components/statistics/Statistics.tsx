import React from "react";
import styled from "styled-components";
import { theme } from "../../styled/Theme";

export const Statistics = () => {
  return (
    <StyledStatistics>
      <PrimaryText>Satisfaction Clients</PrimaryText>
      <SecondaryText>100 %</SecondaryText>
      <PrimaryText>Clients On Worldwide</PrimaryText>
      <SecondaryText>+ 80</SecondaryText>
      <PrimaryText>Projects Done</PrimaryText>
      <SecondaryText>743</SecondaryText>
    </StyledStatistics>
  );
};

const StyledStatistics = styled.div`
  width: 194px;
  height: 450px;
`;

const PrimaryText = styled.h2`
  font-family: Playfair Display;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const SecondaryText = styled.h2`
  color: ${theme.colors.fontSecondary};
  font-family: Playfair Display;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
`;
