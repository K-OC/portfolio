import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive}>
        <CardItem>Item 1</CardItem>
        <CardItem>Item 2</CardItem>
        <CardItem>Item 3</CardItem>
      </Carousel>
    </>
  );
};

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  max-width: fit-content;
  color: white;
`;
const CardItem = styled.div`
  border: 1px solid white;
  color: white;
  @media (max-width: 769px) {
    border: none;
  }
`;
export default Projects;
