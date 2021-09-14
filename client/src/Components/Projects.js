import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "./Header";
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <Header />
      <WrapperWrapper>
        <Wrapper>
          <Description>
            <ParText>
              Moodr, above all else, is a data collection application. While the
              purpose of the app is not scientific, it can give users the
              ability to track how they feel across time and place.
            </ParText>
          </Description>
          <Carousel
            autoPlay="false"
            stopOnHover="true"
            infiniteLoop="true"
            interval="10000"
            showIndicators="false"
          >
            <CardWrapper>
              <HeaderText>Moodr</HeaderText>

              <ImgWrapper>
                <Img
                  src="/moodr1.JPG"
                  alt="full screen shot of moodr, page contents include global feed, a map with several crow icons on it, and a dropdown list of emotions to select from."
                  style={{ "max-height": "30vh", "max-width": "45vw" }}
                />
              </ImgWrapper>
              <ProjectCopy>
                moodr is the simple social network where you can share where and
                what you feel
              </ProjectCopy>
            </CardWrapper>
            <CardWrapper>
              <HeaderText>Moodr</HeaderText>
              <ImgWrapper>
                <Img
                  src="/moodr4.JPG"
                  alt="image depicts a close up of the emotion dropdown menu with the Anger dropdown selected. Options are: critical, distant, frustrated, aggresive, hatred, threatened and hurt."
                />
              </ImgWrapper>
              <ProjectCopy>the user selects an emotion</ProjectCopy>
            </CardWrapper>
            <CardWrapper>
              <HeaderText>Moodr</HeaderText>

              <ImgWrapper>
                <Img
                  src="/moodr2.JPG"
                  alt="close up of a crow icon on the map"
                />
              </ImgWrapper>
              <ProjectCopy>
                moodr uses the google maps api, allowing users to drop a pin
              </ProjectCopy>
            </CardWrapper>
            <CardWrapper>
              <HeaderText>Moodr</HeaderText>

              <ImgWrapper>
                <Img
                  src="/moodr3.JPG"
                  alt="image shows a crow icon which has been clicked, and expanded to show details of the user's post. Text in info window reads: Mood: Depressed, Lat: 53.8930, Lng: -122.8131, Emoted on: Monday, June 14, 2021, 01:11 PM"
                />
              </ImgWrapper>
              <ProjectCopy>
                which contains a corresponding info window
              </ProjectCopy>
            </CardWrapper>
            <CardWrapper>
              <HeaderText>Moodr</HeaderText>
              <ImgWrapper>
                <Img
                  src="moodr6.png"
                  alt="shows a feed with several cards containing the same information as the info windows generated by the clicked crow icon."
                />
              </ImgWrapper>
              <ProjectCopy>and populates the global feed</ProjectCopy>
            </CardWrapper>
            <CardWrapper>
              <ProjectCopy>
                <a href="https://github.com/K-OC/moodr">
                  https://github.com/K-OC/moodr
                </a>
              </ProjectCopy>
            </CardWrapper>
          </Carousel>
          <Description>
            <ParText>
              Following a tutorial, I created Glen Coin using the{" "}
              <a
                href="https://remix.ethereum.org/"
                target="_blank"
                rel="noreferrer"
              >
                etherum IDE
              </a>
              , the smart contract itself was written using solidity, and the
              coin was launched on the Kovan test net. Glen Coin can be sent and
              received, and can be found on Uniswap, assuming you are searchin
              the Kovan test net. I created Glen Coin for my friend Glen on his
              birtday.
            </ParText>
          </Description>
          <Carousel
            autoPlay="false"
            stopOnHover="true"
            infiniteLoop="true"
            interval="10000"
            showIndicators="false"
          >
            <CardWrapper>
              <HeaderText>Glen Coin</HeaderText>

              <ImgWrapper>
                <Img
                  src="/GLNCOIN.png"
                  alt="A screen shot showing a metamask wallet containing Glen Coin."
                  style={{ "max-height": "30vh", "max-width": "45vw" }}
                />
              </ImgWrapper>
              <ProjectCopy>
                A metamask wallet showing a balance of Glen Coin.
              </ProjectCopy>
            </CardWrapper>
            <CardWrapper>
              <HeaderText>Glen Coin</HeaderText>

              <ImgWrapper>
                <a
                  href="https://kovan.etherscan.io/token/0x84e3f2cd6202172c278509c56912725bcf4c8759?a=0x5a99f4adcce63bf3fda584f6bacc822f17c26deb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Img
                    src="/contract.png"
                    alt=""
                    style={{ "max-height": "30vh", "max-width": "45vw" }}
                  />
                </a>
              </ImgWrapper>
              <ProjectCopy>
                Click this image to see the contract on Etherscan
              </ProjectCopy>
            </CardWrapper>
            <CardWrapper>
              <HeaderText>Glen Coin</HeaderText>

              <ImgWrapper>
                <Img
                  src="/glen.jpg"
                  alt="My friend Glen standing in a doorway holding a cat inside of a big paper bag."
                  style={{ "max-height": "30vh", "max-width": "45vw" }}
                />
              </ImgWrapper>
              <ProjectCopy>
                The titular Glen who is famously beloved by cats.
              </ProjectCopy>
            </CardWrapper>
          </Carousel>
        </Wrapper>
      </WrapperWrapper>

      <Footer />
    </>
  );
};
const Wrapper = styled.div`
  width: 50vw;
  height: fit-content;
  font-family: var(--header-font);
  margin: 0;
  @media (max-width: 769px) {
    flex-direction: column;
    width: 100vw;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid white;
  height: 50vh;
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
  font-size: 30px;
  margin: 1em;
  line-height: 1;
  padding-bottom: 10px;
  @media (max-width: 769px) {
    font-size: 15px;
    justify-content: center;
  }
`;

const HeaderText = styled.h1`
  color: #e6e6e6;
  line-height: 1;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
  padding-right: 20%;
`;
const ParText = styled.p`
  color: #e6e6e6;
  font-size: 30px;
  line-height: 1;
  text-align: left;
  padding-left: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 769px) {
    font-size: 15px;
  }
`;
const WrapperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;

  @media (max-width: 769px) {
    flex-direction: column-reverse;
  }
`;
export default Projects;
