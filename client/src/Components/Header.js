import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { GiHamburgerMenu } from "react-icons/gi";
// import { Link } from "react-router-dom";
const Header = () => {
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
        <GiHamburgerMenu color="white" />
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
`;

export default Header;
