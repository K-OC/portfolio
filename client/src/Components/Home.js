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
        <CardWrapper>
        <AboutWrapper>
          <AboutCard />
        </AboutWrapper>
        <ProjectsWrapper>
          <Projects />
        </ProjectsWrapper>
        </CardWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: fit-content;
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
  height: 50vh;
  
`;
const ProjectsWrapper = styled.div`
height: 50vh;
align-items: center;
justify-content: center;
`;

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
`

export default Home;
