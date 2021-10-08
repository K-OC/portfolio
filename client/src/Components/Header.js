import React, { useState } from "react";
import styled from "styled-components";
import DropList from "./DropList";
import { SocialIcon } from "react-social-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Header = () => {
  const [clicked, setClicked] = useState(null);
  const props = useSpring({
    mass: 9.4,
    tension: 463,
    precision: 0.222,
    velocity: -6,
  });
  const handleClick = () => {
    if (clicked !== true) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };
  return (
    <>
      <Wrapper>
        <Title>
          <StyledLink href="/">Kieran O'Connell</StyledLink>
        </Title>
        <IconWrapper>
          <SocialIcon
            fgColor="#070707"
            bgColor="#e6e6e6"
            url="https://github.com/K-OC"
            target="_blank"
          />
          <SocialIcon
            fgColor="#070707"
            bgColor="#e6e6e6"
            url="https://www.linkedin.com/in/kieran-oc/"
            target="_blank"
          />

          <ProjectsIcon to="/projects">
            <PIcon>Projects</PIcon>
          </ProjectsIcon>
        </IconWrapper>
        <BurgerWrapper>
          <StyledButton onClick={handleClick}>
            {clicked === true ? (
              <animated.div style={props}>
                <DropListWrapper>
                  <DropList />
                </DropListWrapper>
              </animated.div>
            ) : (
              <GiHamburgerMenu color="white" size="2rem" />
            )}
          </StyledButton>
        </BurgerWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  height: 5rem;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  font-family: var(--header-font);
  color: #e6e6e6;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 1rem;
  @media (max-width: 769px) {
    display: none;
  }
`;
const BurgerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledButton = styled.button`
  background-color: #070707;
  border: none;
`;
const DropListWrapper = styled.div`
  @media (max-width: 768px) {
    font-size: 8px;
  }
  @media (max-width: 400px) {
    font-size: 5px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #e6e6e6;
  margin: 0;
  padding: 0;
`;

const ProjectsIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #e6e6e6;
  height: 52px;
  width: 52px;

  text-decoration: none;
`;
const PIcon = styled.h1`
  font-weight: bold;
  font-family: var(--header-font);
  font-size: 13px;
  color: #070707;
`;
export default Header;
