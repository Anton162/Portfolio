import React from "react";
import styled from "styled-components";

export const Statistics = () => {
  return (
    <StyledStatistics>
      <Text>Satisfaction Clients</Text>
      <Text>100 %</Text>
      <Text>Clients On Worldwide</Text>
      <Text>+ 80</Text>
      <Text>Projects Done</Text>
      <Text>743</Text>
    </StyledStatistics>
  );
};

const StyledStatistics = styled.div``;

const Text = styled.h2``;
