import React from "react";
import styled from "styled-components";
import photo from "../../../assets/image/main_bg.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { EmailButton } from "../../../components/button/EmailButton";
import { DowloadButton } from "../../../components/button/CVButton";
import { theme } from "../../../styled/Theme";

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
`;

const Photo = styled.img`
  width: 50%;
  height: 743px;
  object-fit: cover;
  z-index: 0;
`;

const MainTitle = styled.h1`
  font-family: Playfair Display;
  font-size: 90px;
  font-weight: 700;
`;

const MainDescription = styled.h2`
  color: ${theme.colors.fontDescription};
  font-size: 20px;
  font-weight: 400;
  flex-wrap: wrap;
  margin-bottom: 30px;
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
