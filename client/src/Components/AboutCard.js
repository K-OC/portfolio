import React from "react";
import styled from "styled-components";

const AboutCard = () => {
  return (
    <>
      <Wrapper>
        <HeaderText>About me</HeaderText>
        <BodyCopy>
          I am a full-stack developer from St. John's, Newfoundland, Canada.
          Having graduated from Concordia's Web Development boot camp in May,
          2021, I am excited to learn and grow as a developer. Prior to shifting
          to development, I worked as a Director at a mid-sized non-profit.
          Although it was not part of my job description, I felt strongly that
          providing access to entertainment and technology was paramount in
          helping people find degrees of stability and safety that many of us
          take for granted. In my spare time, I want to apply my skills in
          development in ways that can benefit vulnerable and marginalized
          people in my community.
        </BodyCopy>
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
  max-height: 40vh;
  margin-top: 2rem;
  color: #e6e6e6;
  font-family: var(--header-font);
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;
const HeaderText = styled.h1`
  margin: 0;
  line-height: 1.2;
`;
const BodyCopy = styled.p`
  text-align: left;
  line-height: 1.2;
`;

export default AboutCard;
