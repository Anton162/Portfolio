import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { Form } from "../../../components/form/Form";
import { theme } from "../../../styled/Theme";
import { Container } from "../../../components/Container";

export const Contacts = () => {
  return (
    <StyledContacts id={"contacts"}>
      <Container>
        <ContactsWrapper>
          <LeftColumn>
            <Text>Let’s Connect</Text>
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
        </ContactsWrapper>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.div`
  background: ${theme.colors.secondaryBg};
  display: flex;
  justify-content: space-between;
`;

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 20px;

  @media ${theme.media.desktop} {
    padding: 50px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
`;

const Text = styled.span`
  max-width: 438px;
  width: 100%;
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 31px;

  @media ${theme.media.desktop} {
    font-size: 70px;
    margin-bottom: 20px;
    text-align: center;
  }

  @media ${theme.media.mobile} {
    font-size: 60px;
    text-align: center;
  }
`;

const SocialList = styled.ul`
  display: flex;
  gap: 50px;
`;

const SocialItem = styled.li``;

const SocialLink = styled.a``;

const LeftColumn = styled.div`
  max-width: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 31px;

  @media ${theme.media.desktop} {
    justify-content: center;
    align-items: center;
  }
`;
