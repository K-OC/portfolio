import React from "react";
import styled from "styled-components";

const Links = () =>{
    return (
        <>
        <Wrapper>
            <h3>Links</h3>
        <StyledLink href="https://georgenervous.bandcamp.com">George Nervous Four</StyledLink>

        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
font-family: var(--header-font);
background-color: white;
height: 100vh;
width: 100vw;
`
const StyledLink = styled.a`
color: blue;
text-decoration: none;
&:visited{
    text-decoration: underline;
    color: purple;
}
`
export default Links