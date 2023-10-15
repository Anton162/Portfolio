import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  margin_top?: string;
  margin?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  width: 1196px;
  margin: 0 auto;
  margin-top: ${(props) => props.margin_top || "100px"};
  margin-bottom: ${(props) => props.margin || "100px"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
`;
