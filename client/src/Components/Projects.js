import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  return (
    <>
    <Wrapper>
      <Carousel autoPlay="true"
      infiniteLoop="true">
        <CardWrapper>
          <h1>Moodr</h1>
          <div>moodr is the simple social network where you can share where and what you feel</div>
          <Img src="/moodr1.JPG"/>
        </CardWrapper>
        <CardWrapper>
          <h1>Moodr</h1>
          <div>the user selects an emotion</div>
          <Img src="/moodr4.JPG"/>
        </CardWrapper>
        <CardWrapper>
          <h1>Moodr</h1>
          <div>based on the google maps api, moodr allows users to drop a pin</div>
          <Img src="/moodr2.JPG"/>
        </CardWrapper>
        <CardWrapper>
          <h1>Moodr</h1>
          <div>which contains a corresponding info window</div>
          <Img src="/moodr3.JPG"/>
        </CardWrapper>
        <CardWrapper>
          <a>https://github.com/K-OC/moodr</a>
        </CardWrapper>
      </Carousel>
      </Wrapper>
    </>
  );
};

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: white;
  @media (max-width: 769px) {
    border: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  border: 1px solid white;

  background-image: linear-gradient(
    to bottom,
    #070707,
    #070707,
    #070707,
    #00796b
  );
  height: fit-content;
  font-family: var(--header-font);
  margin: 0;
`;

const Img = styled.img`
max-height: 50rem;
max-width: 50rem;
`

export default Projects;
