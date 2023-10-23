import React from "react";
import styled from "styled-components";
import { theme } from "../../../styled/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 40px;
    justify-content: center;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const ListItem = styled.li``;

const Link = styled.a`
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.fontMain};

  :hover {
    color: ${theme.colors.fontSecondary};
  }
`;
