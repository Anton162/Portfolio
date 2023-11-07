import React from "react";
import styled, { keyframes } from "styled-components";
import photo from "../../../assets/image/main_bg.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { EmailButton } from "../../../components/button/EmailButton";
import { DowloadButton } from "../../../components/button/CVButton";
import { theme } from "../../../styled/Theme";
// import { font } from "../../../styled/Common";

const popUpAnimation = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <MainWrapper>
        <BoxDescription>
          <MainTitle>Hello! I&rsquo;m Anton Petukh</MainTitle>
          <Description>
            <MainDescription>
              I&rsquo;am freelance <TextColor>web developer</TextColor> based in
              Poland who loves to craft attractive design experiences for the
              web.
            </MainDescription>
            <EmailButton />
            <DowloadButton />
          </Description>
        </BoxDescription>
      </MainWrapper>
      <Photo src={photo} />
    </StyledMain>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${theme.media.tablet} {
    margin: 0 auto;
    flex-direction: column;
  }
`;

const StyledMain = styled.div`
  display: flex;
  padding-top: 120px;
  min-height: 743px;
  background: ${theme.colors.primaryBg};

  @media ${theme.media.desktop} {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const Photo = styled.img`
  width: 50%;
  height: 743px;
  object-fit: cover;
  z-index: 0;

  @media ${theme.media.desktop} {
    width: 549px;
    height: 750px;
    padding: 50px 0;
  }

  @media ${theme.media.tablet} {
    width: 310px;
    height: 380px;
    padding: 50px 0;
  }

  @media ${theme.media.mobile} {
    width: 210px;
    height: 280px;
    padding: 50px 0;
  }
`;

const MainTitle = styled.h1`
  animation: ${popUpAnimation} 2s ease forwards;
  font-family: "Playfair Display";
  font-size: 90px;
  font-weight: 700;
  margin-left: 198px;

  @media ${theme.media.desktop} {
    margin: 0 auto;
    padding: 20px 0;
    text-align: center;
    font-size: 70px;
  }

  @media ${theme.media.tablet} {
    padding: 0 10px;
    font-size: 65px;
  }

  @media ${theme.media.mobile} {
    margin: 0;
    text-align: center;
    font-size: 40px;
    padding: 20px;
  }
`;

const MainDescription = styled.h2`
  color: ${theme.colors.fontDescription};
  font-size: 20px;
  font-weight: 400;
  flex-wrap: wrap;
  margin-bottom: 30px;
  animation: ${popUpAnimation} 3s ease forwards;

  @media ${theme.media.tablet} {
    padding: 0 10px;
    margin-top: 10px;
    font-size: 18px;
  }

  @media ${theme.media.mobile} {
  }
`;

const TextColor = styled.span`
  color: ${theme.colors.fontMain};
`;

const BoxDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Description = styled.div`
  width: 404px;

  @media ${theme.media.desktop} {
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  @media ${theme.media.mobile} {
    width: 370px;
  }
`;
