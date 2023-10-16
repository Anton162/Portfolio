import React from "react";
import styled from "styled-components";
import photo from "../../../assets/image/main_bg.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { EmailButton } from "../../../components/button/EmailButton";
import { DowloadButton } from "../../../components/button/CVButton";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <BoxDescription>
          <MainTitle>Hello! I&rsquo;m Anton Petukh</MainTitle>
          <Description>
            <MainDescription>
              I&rsquo;am freelance web developer based in Poland who loves to
              craft attractive design experiences for the web.
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
  background: var(--blue, rgba(34, 42, 54, 0.95));
`;

const Photo = styled.img`
  width: 50%;
  height: 743px;
  object-fit: cover;
  z-index: 0;
`;

const MainTitle = styled.h1`
  color: #fff;
  font-size: 90px;
  font-weight: 700;
`;

const MainDescription = styled.h2`
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
  font-weight: 400;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const BoxDescription = styled.div`
  /* width: 720px; */
  padding: 0 118px 0 118px;
`;

const Description = styled.div`
  width: 404px;
  height: 202px;
`;
