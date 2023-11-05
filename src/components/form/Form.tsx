import React from "react";
import styled from "styled-components";
import { SendButton } from "../button/SendButton";
import { theme } from "../../styled/Theme";

export const Form = () => {
  return (
    <StyledForm>
      <StyleText>Your name:</StyleText>
      <StyleFormInput type="text" />
      <StyleText>Your email address:</StyleText>
      <StyleFormInput type="email" />
      <StyleText>Tell about the project:</StyleText>
      <StyleFormInput as={"textarea"} />
      <SendButton />
    </StyledForm>
  );
};

const StyledForm = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 25px;

  @media ${theme.media.desktop} {
    justify-content: center;
    align-items: center;
  }
  @media ${theme.media.desktop} {
    margin: 0 auto;
  }
`;

const StyleText = styled.h2`
  color: ${theme.colors.fontMain};
  font-size: 30px;
  font-weight: 500;

  @media ${theme.media.desktop} {
    font-size: 20px;
  }
  @media ${theme.media.mobile} {
    text-align: center;
  }
`;

const StyleFormInput = styled.input`
  width: 500px;
  font-family: Poppins;
  color: ${theme.colors.fontMain};
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid ${theme.colors.fontMain};
  font-size: 25px;

  @media ${theme.media.tablet} {
    justify-content: center;

    max-width: 400px;
  }

  @media ${theme.media.mobile} {
    justify-content: center;
    max-width: 330px;
  }
`;
