import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AboutCard from "./AboutCard";

const Home = () => {
  return (
    <>
      <Wrapper>
        <ImgWrapper>
          <Img src="/img.jpg" />
        </ImgWrapper>
        <AboutWrapper>
          <AboutCard />
        </AboutWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;

  width: 100vw;
  min-height: fit-content;
  align-items: center;
`;
const ImgWrapper = styled.div`
  width: 50vw;
  height: 100vh;
`;

const Img = styled.img`
  max-width: 40vw;
`;

const AboutWrapper = styled.div`
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default Home;
