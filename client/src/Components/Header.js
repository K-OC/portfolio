import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DropList from "./DropList";
import { SocialIcon } from "react-social-icons";
import { GiHamburgerMenu } from "react-icons/gi";
// import { Link } from "react-router-dom";

const Header = () => {
  const [clicked, setClicked] = useState(null);
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
        <Title><StyledLink href="/">Kieran O'Connell</StyledLink></Title>
        <IconWrapper>
          <SocialIcon
            fgColor="#070707"
            bgColor="#e6e6e6"
            url="https://github.com/K-OC"
          />
          <SocialIcon
            fgColor="#070707"
            bgColor="#e6e6e6"
            url="https://www.linkedin.com/in/kieran-oc/"
          />
          <ProjectsIcon href="/Projects">t</ProjectsIcon>
        </IconWrapper>
        <BurgerWrapper>
          <StyledButton onClick={handleClick}>
            {clicked === true ? (
              <DropListWrapper>
                <DropList />
              </DropListWrapper>
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
  font-family: var(--header-font);
  color: #e6e6e6;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
color: white;
`
const ProjectsIcon = styled.a`
display: flex;
align-items: center;
justify-content: center;
border-radius: 100%;
background-color: #e6e6e6;
height: 52px;
width: 52px;
text-decoration: none;
`

export default Header;
