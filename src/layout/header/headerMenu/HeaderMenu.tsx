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
              <NavLink href={`#${item}`}>{item}</NavLink>
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

    @media ${theme.media.tablet} {
      display: none;
      /* flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px 0 20px; */
    }
  }
`;

const ListItem = styled.li`
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: scaleY(0.8);
  }
`;

const NavLink = styled.a`
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.fontMain};

  :hover {
    color: ${theme.colors.fontSecondary};
  }
`;
