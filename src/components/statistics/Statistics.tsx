import React from "react";
import styled from "styled-components";
import { theme } from "../../styled/Theme";

export const Statistics = () => {
  return (
    <StyledStatistics>
      <PrimaryText>Satisfaction Clients</PrimaryText>
      <SecondaryText>100%</SecondaryText>
      <PrimaryText>Clients On Worldwide</PrimaryText>
      <SecondaryText>7</SecondaryText>
      <PrimaryText>Projects Done</PrimaryText>
      <SecondaryText>7</SecondaryText>
    </StyledStatistics>
  );
};

const StyledStatistics = styled.div`
  max-width: 194px;
  height: 100%;

  @media ${theme.media.desktop} {
    display: none;
    /* display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;

    gap: 40px; */
  }

  /* @media ${theme.media.tablet} {
    gap: 20px;
    flex-wrap: wrap;
  }

  @media ${theme.media.mobile} {
    flex-wrap: wrap;
    gap: 10px;
  } */
`;

const PrimaryText = styled.h2`
  font-family: Playfair Display;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;

  @media ${theme.media.desktop} {
    font-size: 25px;
  }
`;

const SecondaryText = styled.h2`
  color: ${theme.colors.fontSecondary};
  font-family: Playfair Display;
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
`;
