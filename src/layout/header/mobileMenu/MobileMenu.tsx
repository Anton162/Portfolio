import React, { useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../styled/Theme";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup isOpen={menuIsOpen}>
        <ul>
          {props.menuItems.map((item: string, index: number) => {
            return (
              <ListItem key={index}>
                <Link href="">{item}</Link>
              </ListItem>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }

  @media ${theme.media.mobile} {
    display: block;
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: ${theme.colors.primaryBg};
  padding: 20px 10px;
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  ul {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 99999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.fontMain};
    position: absolute;
    left: 30px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgb(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.fontMain};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0px);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.fontMain};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0px);
          width: 36px;
        `}
    }
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
