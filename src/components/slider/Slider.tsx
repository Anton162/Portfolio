import React from "react";
import styled from "styled-components";
import photo from "../../assets/image/main_bg.webp";
import { ButtonArrowLeft } from "../button/ButtonArrowLeft";
import { ButtonArrowRight } from "../button/ButtonArrowRight";
import { theme } from "../../styled/Theme";

export const Slider = () => {
  return (
    <StyledSlider>
      <Slide>
        <Photo src={photo} />
        <StyledBox>
          <Quote>“</Quote>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent{" "}
          </Text>
          <ButtonBox>
            <ButtonArrowLeft />
            <ButtonArrowRight />
          </ButtonBox>
        </StyledBox>
      </Slide>
    </StyledSlider>
  );
};

const StyledSlider = styled.div``;

const Slide = styled.div`
  max-width: 894px;
  width: 100%;
  display: flex;

  align-items: center;

  @media ${theme.media.desktop} {
    flex-direction: column;
  }
`;

const Quote = styled.p`
  color: ${theme.colors.fontDescription};
  width: 47px;
  height: 77px;
  font-family: Playfair Display;
  font-size: 100px;
  font-weight: 700;

  @media ${theme.media.desktop} {
    font-size: 70px;
    height: 60px;
  }
`;

const Text = styled.p`
  max-width: 490px;
  width: 100%;
  font-size: 20px;
  font-weight: 700;

  @media ${theme.media.desktop} {
    font-size: 18px;
  }

  @media ${theme.media.mobile} {
    flex-wrap: wrap;
    font-size: 15px;
  }
`;

const Photo = styled.img`
  height: 389px;
  width: 381px;
`;

const ButtonBox = styled.div`
  max-width: 95px;
  width: 100%;
  display: flex;
  gap: 15px;
  margin-top: 15px;

  @media ${theme.media.desktop} {
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

const StyledBox = styled.div`
  margin-left: 15px;

  @media ${theme.media.desktop} {
    padding: 0 20px;
  }
`;
