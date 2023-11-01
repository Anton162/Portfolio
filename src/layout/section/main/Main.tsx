import React from "react";
import styled from "styled-components";
import photo from "../../../assets/image/main_bg.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { EmailButton } from "../../../components/button/EmailButton";
import { DowloadButton } from "../../../components/button/CVButton";
import { theme } from "../../../styled/Theme";
import { font } from "../../../styled/Common";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
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
      </FlexWrapper>
      <Photo src={photo} />
    </StyledMain>
  );
};

const StyledMain = styled.div`
  display: flex;
  width: 100%;
  min-height: 743px;
  background: ${theme.colors.primaryBg};

  @media ${theme.media.dextop} {
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

  @media ${theme.media.tablet} {
    width: 310px;
    height: 380px;
  }
`;

const MainTitle = styled.h1`
  ${font({
    family: "'Playfair Display', sans-serif",
    weight: 700,
    Fmax: 90,
    Fmin: 50,
  })}

  @media ${theme.media.tablet} {
    padding: 0 10px;
  }
`;

const MainDescription = styled.h2`
  color: ${theme.colors.fontDescription};
  font-size: 20px;
  font-weight: 400;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media ${theme.media.tablet} {
    padding: 0 10px;
    margin-top: 10px;
  }
`;

const TextColor = styled.span`
  color: ${theme.colors.fontMain};
`;

const BoxDescription = styled.div`
  padding: 0 118px 0 118px;
`;

const Description = styled.div`
  width: 404px;
  height: 202px;
`;
