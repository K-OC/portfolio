import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Wrapper>
        <ImgWrapper style={{ "background-image": "/background.jpg" }}>
          <Img src="/img.jpg" />
        </ImgWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
`;
const ImgWrapper = styled.div`
  width: 100vw;
`;

const Img = styled.img`
  max-width: 50vw;
`;

export default Home;
