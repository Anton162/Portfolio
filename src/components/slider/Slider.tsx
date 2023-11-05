import React, { useState } from "react";
import styled from "styled-components";
import photo1 from "../../assets/image/slide1.webp";
import photo2 from "../../assets/image/slide2.webp";
import { ButtonArrowLeft } from "../button/ButtonArrowLeft";
import { ButtonArrowRight } from "../button/ButtonArrowRight";
import { theme } from "../../styled/Theme";

const slidesData = [
  {
    image: photo1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent",
  },
  {
    image: photo2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metusnec fringilla accumsan",
  },
  // Добавьте другие слайды с соответствующими текстами
];

export const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };
  return (
    <StyledSlider>
      <Slide>
        <Photo src={slidesData[currentSlide].image} />
        <StyledBox>
          <Quote>“</Quote>
          <Text>{slidesData[currentSlide].text}</Text>
          <ButtonBox>
            <ButtonArrowLeft onClick={handlePrevSlide} />
            <ButtonArrowRight onClick={handleNextSlide} />
          </ButtonBox>
        </StyledBox>
      </Slide>
    </StyledSlider>
  );
};

const StyledSlider = styled.div``;

const Slide = styled.div`
  border: 1px solid red;
  max-width: 894px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: transform 1s ease-in-out;

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
  height: 400px;
  width: 300px;
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
