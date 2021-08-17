import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <StyledTitle>Get in touch</StyledTitle>
        <StyledLink href="mailto:owner@kieran-oconnell.ca">Email</StyledLink>
        <StyledLink href="#">Telegram: @kieran7</StyledLink>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const StyledTitle = styled.h1`
  color: #e6e6e6;
  font-family: var(--header-font);
`;

const StyledLink = styled.a`
  color: #e6e6e6;
  font-family: var(--header-font);
  text-decoration: none;

  &:hover {
    color: pink;
    translate: 1px;
  }
`;

export default Contact;
