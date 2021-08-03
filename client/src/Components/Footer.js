import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
    <FooterWrapper>
    <StyledLink to="/contact">Contact</StyledLink>
    <StyledLink></StyledLink>
    </FooterWrapper>
    </>
  );
};

const FooterWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color:#00796b;
width: 100vw;
line-height: 1;
padding: 0;
margin: 0;
`

const StyledLink = styled(Link)`
color: white;
text-decoration: none;
@media (min-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`
export default Footer;
