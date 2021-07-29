import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  return (
    <>
    <Wrapper>
      <Carousel>
        <CardWrapper>
          <h1>Moodr</h1>
        </CardWrapper>
      </Carousel>
      </Wrapper>
    </>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;

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


export default Projects;
