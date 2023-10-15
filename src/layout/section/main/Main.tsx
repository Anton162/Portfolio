import React from "react";
import styled from "styled-components";
import photo from "../../../assets/image/main_bg.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <MainTitle>Hello! I&rsquo;m Anton Petukh</MainTitle>
          <MainDescription>
            I&rsquo;am freelance web developer based in Poland who loves to
            craft attractive design experiences for the web.
          </MainDescription>
        </div>

        <Photo src={photo} />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background: var(--blue, rgba(34, 42, 54, 0.95));
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
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
`;
