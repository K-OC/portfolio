import React from "react";
import styled from "styled-components"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
    <CardWrapper>
    <Carousel responsive={responsive}>
  <CardItem>Item 1</CardItem>
  <CardItem>Item 2</CardItem>
  <CardItem>Item 3</CardItem>
    </Carousel>
    </CardWrapper>
    </>
  )
};

const CardWrapper = styled.div`
color: white;
`
const CardItem = styled.div`
max-width: 100vw;
`
export default Projects;
