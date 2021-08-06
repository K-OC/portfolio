import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <StyledTitle>Get in touch</StyledTitle>
        <StyledLink href="mailto:owner@kieran-oconnell.ca">Email</StyledLink>
      </Wrapper>
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
    translate: 2px;
  }
`;

export default Contact;
