import React from "react";
import styled from "styled-components";
import { SendButton } from "../button/SendButton";
import { ButtonArrowRight } from "../button/ButtonArrowRight";

export const Form = () => {
  return (
    <StyledForm>
      <StyleText>Your name:</StyleText>
      <StyleFormInput type="text" />
      <StyleText>Your email address:</StyleText>
      <StyleFormInput type="text" />
      <StyleText>Tell about the project:</StyleText>
      <StyleFormInput type="text" />
      <SendButton />
    </StyledForm>
  );
};

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const StyleText = styled.h2`
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const StyleFormInput = styled.input`
  width: 500px;
  color: white;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #fff;
`;
