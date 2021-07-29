import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AboutCard from "./AboutCard";
import Projects from "./Projects";

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
  width: fit-content;
  min-height: fit-content;
  align-items: center;
  justify-content: space-evenly;
`;
const ImgWrapper = styled.div`
  max-width: 50vw;
  max-height: 50vh;
  padding-right: 2rem;
  
`;

const Img = styled.img`
  width: 50vw;
`;

const AboutWrapper = styled.div`
  height: 100vh;
display: flex;
`;




export default Home;
