import React from "react";
import styled from "styled-components";

const Links = () =>{
    return (
        <>
        <Wrapper>
            <h2>Links</h2>
            <h3>Music</h3>
        <StyledLink href="https://georgenervous.bandcamp.com">George Nervous Four</StyledLink>
        <StyledLink href="https://open.spotify.com/artist/6tu0poYD76wbVyQuN8Tclw">Mild Manors</StyledLink>
        <h3>Advocacy</h3>
        <StyledLink href="https://www.saltwire.com/newfoundland-labrador/news/transport-subsidies-needed-for-newfoundland-and-labradors-low-income-earners-rogers-228647/">Transportation Advocacy</StyledLink>
        <StyledLink href="https://www.cbc.ca/news/canada/newfoundland-labrador/leonard-phair-emergency-shelter-st-johns-gerry-rogers-al-hawkins-1.4684369">Housing Advocacy</StyledLink>
        <StyledLink href="https://fb.watch/7kjZlYhiRL/">Speaking Engagement</StyledLink>

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