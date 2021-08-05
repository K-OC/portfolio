import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <h1>Get in touch</h1>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export default Contact;
