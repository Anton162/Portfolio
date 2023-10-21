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

const StyledSlider = styled.div`
  border: 1px solid red;
`;

const Slide = styled.div`
  max-width: 894px;
  height: 393px;
  display: flex;
  align-items: center;
`;

const Quote = styled.p`
  color: ${theme.colors.fontDescription};
  width: 47px;
  height: 77px;
  font-family: Playfair Display;
  font-size: 100px;
  font-weight: 700;
`;

const Text = styled.p`
  width: 490px;
  font-size: 20px;
  font-weight: 700;
  line-height: 180%;
`;

const Photo = styled.img`
  height: 389px;
  width: 381px;
`;

const ButtonBox = styled.div`
  width: 95px;
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const StyledBox = styled.div`
  margin-left: 15px;
`;
