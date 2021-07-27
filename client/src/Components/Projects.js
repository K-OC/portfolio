import React, { Component } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  return (
    <>
      <Carousel>
        <CardWrapper>
          <h1>Moodr</h1>
        </CardWrapper>
      </Carousel>
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

export default Projects;
