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
        <Title>Kieran O'Connell</Title>
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
        </IconWrapper>
        <BurgerWrapper>
          <StyledButton onClick={handleClick}>
            <GiHamburgerMenu color="white" size="2rem" />
            {clicked === true ? <DropList /> : null}
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
`;

export default Header;
