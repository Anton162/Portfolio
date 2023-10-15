import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";

export const Footer = () => {
  return <StyledFooter>Created by Anton | All Reserved! 2023</StyledFooter>;
};

const StyledFooter = styled.div`
  background: #000;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.3px;
`;
