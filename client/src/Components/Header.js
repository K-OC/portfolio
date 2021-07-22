import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Title>Kieran O'Connell</Title>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
`;

const Title = styled.h1`
  font-family: var(--header-font);
  color: #e6e6e6;
`;

export default Header;
