import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Form } from "../../../components/form/Form";

export const Contacts = () => {
  return (
    <StyledContacts>
      <FlexWrapper justify={"space-between"} align={"center"}>
        <LeftColumn>
          <Text>
            Let’s <br /> Connect
          </Text>
          <SocialList>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  height={"25px"}
                  width={"25px"}
                  viewBox={"0 0 25px 25px"}
                  iconId={"github"}
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  height={"25px"}
                  width={"25px"}
                  viewBox={"0 0 25px 25px"}
                  iconId={"linkedIn"}
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  height={"25px"}
                  width={"25px"}
                  viewBox={"0 0 25px 25px"}
                  iconId={"instagram"}
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  height={"25px"}
                  width={"25px"}
                  viewBox={"0 0 25px 25px"}
                  iconId={"telegram"}
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="#">
                <Icon
                  height={"25px"}
                  width={"25px"}
                  viewBox={"0 0 25px 25px"}
                  iconId={"mail"}
                />
              </SocialLink>
            </SocialItem>
          </SocialList>
        </LeftColumn>

        <Form />
      </FlexWrapper>
    </StyledContacts>
  );
};

const StyledContacts = styled.div`
  background: #000;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.span`
  width: 438px;
  color: #fff;
  font-size: 100px;
  font-weight: 700;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 50px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const LeftColumn = styled.div``;
