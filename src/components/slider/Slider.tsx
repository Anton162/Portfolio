import React, { useState } from "react";
import styled from "styled-components";
import photo1 from "../../assets/image/slide1.webp";
import photo2 from "../../assets/image/slide2.webp";
import photo3 from "../../assets/image/slide3.webp";
import { ButtonArrowLeft } from "../button/ButtonArrowLeft";
import { ButtonArrowRight } from "../button/ButtonArrowRight";
import { theme } from "../../styled/Theme";

const slidesData = [
  {
    image: photo1,
    text: " I enthusiastically explore the realm of React and TypeScript development. With several years of experience, I craft web applications that harness the power of these technologies, enabling me to efficiently tackle tasks and build robust interactive web applications.",
  },
  {
    image: photo2,
    text: " My relentless thirst for knowledge and pursuit of excellence make me a better developer. I learn every day, delving into new concepts and practices, engaging in professional courses, and sharing insights with peers.",
  },
  {
    image: photo3,
    text: " My ardor for development manifests in my ability to craft creative and distinctive solutions for challenges. I firmly believe that every problem has a non-conventional solution, and I find inspiration in approaching things differently and motivating others to do the same.",
  },
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
  max-width: 894px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: transform 2s ease-in-out;

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
  height: 165px;
  width: 100%;
  font-size: 20px;
  font-weight: 700;

  @media ${theme.media.desktop} {
    font-size: 18px;
  }

  @media ${theme.media.mobile} {
    flex-wrap: wrap;
    font-size: 15px;
    height: 185px;
  }
`;

const Photo = styled.img`
  height: 100%;
  width: 389px;
  @media ${theme.media.tablet} {
    height: 400px;
    width: 300px;
  }

  @media ${theme.media.mobile} {
    height: 300px;
    width: 200px;
  }
`;

const ButtonBox = styled.div`
  max-width: 95px;
  width: 100%;
  display: flex;
  gap: 15px;
  margin-top: 50px;

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
