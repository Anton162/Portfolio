import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { theme } from "../../styled/Theme";
import { Container } from "../../components/Container";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        Created by <Link href="#">Anton</Link> | All Reserved! 2023
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  height: 200px;
  padding: 100px 0 50px 0;
  background: ${theme.colors.secondaryBg};
  color: ${theme.colors.fontDescription};
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.3px;
`;

const Link = styled.a`
  color: ${theme.colors.fontMain};
`;
