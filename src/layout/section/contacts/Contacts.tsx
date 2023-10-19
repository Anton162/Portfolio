import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Form } from "../../../components/form/Form";
import { theme } from "../../../styled/Theme";
import { Container } from "../../../components/Container";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
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
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.div`
  background: ${theme.colors.secondaryBg};
  display: flex;
  justify-content: space-between;
`;

const Text = styled.span`
  width: 438px;
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 31px;
`;

const SocialList = styled.ul`
  display: flex;
  gap: 50px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
`;
