import React from "react";
import styled from "styled-components";
import photo from "../../assets/image/main_bg.webp";

export const Slider = () => {
  return (
    <StyledSlider>
      <Slide>
        <div>
          <Photo src={photo} />
        </div>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent{" "}
        </Text>
      </Slide>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  border: 1px solid red;
  display: flex;
`;

const Slide = styled.div`
  max-width: 894px;
  height: 393px;
  text-align: center;
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  width: 490px;
`;

const Photo = styled.img`
  height: 389px;
  width: 381px;
`;
