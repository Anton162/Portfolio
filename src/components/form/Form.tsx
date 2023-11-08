import React, { useRef, RefObject } from "react";
import styled from "styled-components";
import { SendButton } from "../button/SendButton";
import { theme } from "../../styled/Theme";
import emailjs from "@emailjs/browser";

export const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_vte33ae",
        "template_npp2i2r",
        form.current,
        "DQBRkiDlG3vlpci_s"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <StyleText>Your name:</StyleText>
      <StyleFormInput required type="text" name="user_name" />
      <StyleText>Your email address:</StyleText>
      <StyleFormInput required type="email" name="email" />
      <StyleText>Tell about the project: </StyleText>
      <StyleFormInput required as="textarea" name="message" />
      <SendButton />
    </StyledForm>
  );
};

const StyledForm = styled.form`
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
