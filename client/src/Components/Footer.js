import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
    <FooterWrapper>
    <StyledLink to="/contact">Contact</StyledLink>
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

`
export default Footer;
