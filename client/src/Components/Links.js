import React from "react";
import styled from "styled-components";

const Links = () =>{
    return (
        <>
        <Wrapper>
        <StyledLink href="https://georgenervous.bandcamp.com">George Nervous Four</StyledLink>

        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: white;
height: 100vh;
width: 100vw;
`
const StyledLink = styled.a`
color: blue;
`
export default Links