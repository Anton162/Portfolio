import React from "react";
import styled from "styled-components";
import photo from "../../../assets/image/main_bg.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Header } from "../../header/Header";

export const Main = () => {
  return (
    <StyledMain>
      <Header />
      <FlexWrapper align={"center"} justify={"space-around"}>
        <BoxDescription>
          <MainTitle>Hello! I&rsquo;m Anton Petukh</MainTitle>
          <MainDescription>
            I&rsquo;am freelance web developer based in Poland who loves to
            craft attractive design experiences for the web.
          </MainDescription>
        </BoxDescription>
        <Photo src={photo} />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  width: 100%;
  min-height: 1000px;
  background: url(${photo}) no-repeat center right;
  background-size: 100% 50%;
  background: var(--blue, rgba(34, 42, 54, 0.95));
  position: relative;
`;

const Photo = styled.img`
  width: 50%;
  height: 743px;
  object-fit: cover;
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
`;

const BoxDescription = styled.div`
  /* width: 720px; */
  padding: 0 118px 0 118px;
`;
