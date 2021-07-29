import React from "react";
import styled from "styled-components";

const AboutCard = () => {
  return (
    <>
      <Wrapper>
        <h2>About me</h2>
        <p>
        Hi there and welcome to my portfolio! I am a full-stack developer from St. John's, Newfoundland, Canada. Having graduated from Concordia's Web Development boot camp in May, 2021, I am excited to learn and grow as a developer. 
        Prior to shifting to development, I worked as a Director at a mid-sized non-profit. Although it was not part of my job description, I felt strongly that access to entertainment and technology was paramount in helping people find degrees of stability and safety that many of us take for granted. In my spare time, I want to apply my skills in development in ways that can benefit vulnerable and margninalized peopley in my community.
        </p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  width: 40vw;
  min-height: fit-content;
  padding: 1rem;
  height: 50vh;
  color: #e6e6e6;
  font-family: var(--header-font);
  @media (min-width: 768px) {
    border: 1px #e6e6e6 solid;
  }
`;

export default AboutCard;
