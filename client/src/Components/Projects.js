import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  return (
    <>
      <Wrapper>
        <Carousel
          autoPlay="true"
          infiniteLoop="true"
          stopOnHover="true"
          interval="10000"
        >
          <CardWrapper>
            <h1>Moodr</h1>
            <ProjectCopy>
              moodr is the simple social network where you can share where and
              what you feel
            </ProjectCopy>
            <ImgWrapper>
              <Img src="/moodr1.JPG" />
            </ImgWrapper>
          </CardWrapper>
          <CardWrapper>
            <h1>Moodr</h1>
            <ProjectCopy>the user selects an emotion</ProjectCopy>
            <ImgWrapper>
              <Img src="/moodr4.JPG" />
            </ImgWrapper>
          </CardWrapper>
          <CardWrapper>
            <h1>Moodr</h1>
            <ProjectCopy>
              moodr uses the google maps api, allowing users to drop a pin
            </ProjectCopy>
            <ImgWrapper>
              <Img src="/moodr2.JPG" />
            </ImgWrapper>
          </CardWrapper>
          <CardWrapper>
            <h1>Moodr</h1>
            <ProjectCopy>
              which contains a corresponding info window
            </ProjectCopy>
            <ImgWrapper>
              <Img src="/moodr3.JPG" />
            </ImgWrapper>
          </CardWrapper>
          <CardWrapper>
            <h1>Moodr</h1>
            <ProjectCopy>and populates the global feed</ProjectCopy>
            <ImgWrapper>
              <Img src="moodr6.png" />
            </ImgWrapper>
          </CardWrapper>
          <CardWrapper>
            <ProjectCopy>https://github.com/K-OC/moodr</ProjectCopy>
          </CardWrapper>
        </Carousel>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;

  background-image: linear-gradient(
    to bottom,
    #070707,
    #070707,
    #070707,
    #00796b
  );
  font-family: var(--header-font);
  margin: 0;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid white;
  min-height: 80vh;
  min-width: 50vw;

  padding: 1px;
  color: white;
  @media (max-width: 769px) {
    border: none;
  }
`;

const Img = styled.img`
  height: max-content;
  width: max-content;
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 30rem;
  max-width: 30rem;
  overflow: hidden;
`;

const ProjectCopy = styled.p`
  color: #e6e6e6;
  font-size: 20px;
  margin: 0;
`;
export default Projects;
