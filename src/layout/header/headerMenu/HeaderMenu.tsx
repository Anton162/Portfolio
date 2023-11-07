import React from "react";
import styled from "styled-components";
import { theme } from "../../../styled/Theme";
import { Link } from "react-scroll";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <NavLink to={item.toLowerCase()} smooth={true}>
                {item}
              </NavLink>
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
    }
  }
`;

const ListItem = styled.li`
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: scaleY(0.8);
  }
`;

const NavLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.fontMain};
  cursor: pointer;

  :hover {
    color: ${theme.colors.fontSecondary};
  }
`;
