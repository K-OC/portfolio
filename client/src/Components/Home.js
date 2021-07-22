import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Wrapper>
        <ImgWrapper>
          <Img src="/img.jpg" />
        </ImgWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const ImgWrapper = styled.div`
  max-width: 50vw;
  max-height: 100vh;
`;

const Img = styled.img`
  max-width: 50vw;
`;

export default Home;
