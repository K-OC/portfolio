import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <Wrapper>
        <StyledNav to="/" exact>
          ← Back
        </StyledNav>
        <h2>Links</h2>
        <h3>music</h3>
        <StyledLink href="https://georgenervous.bandcamp.com">
          George Nervous Four
        </StyledLink>
        <StyledLink href="https://open.spotify.com/artist/6tu0poYD76wbVyQuN8Tclw">
          Mild Manors
        </StyledLink>
        <h3>advocacy</h3>
        <StyledLink href="https://www.saltwire.com/newfoundland-labrador/news/transport-subsidies-needed-for-newfoundland-and-labradors-low-income-earners-rogers-228647/">
          Transportation
        </StyledLink>
        <StyledLink href="https://www.cbc.ca/news/canada/newfoundland-labrador/leonard-phair-emergency-shelter-st-johns-gerry-rogers-al-hawkins-1.4684369">
          Housing
        </StyledLink>
        <StyledLink href="https://fb.watch/7kjZlYhiRL/">
          Speaking Engagement
        </StyledLink>
        <h3>stuff that i like</h3>
        <StyledLink href="https://eff.org">EFF</StyledLink>
        <StyledLink href="https://en.wikipedia.org/wiki/Neuromancer">
          neuromancer
        </StyledLink>
        <StyledLink href="https://www.youtube.com/user/8020drummer">
          80/20 drummer
        </StyledLink>
        <StyledLink href="https://www.youtube.com/watch?v=_GxcFx8LZRk">
          grappling
        </StyledLink>
        <StyledLink href="https://www.newfoundlandproud.com">
          Throwaway Site
        </StyledLink>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--header-font);
  background-color: white;
  height: 100vh;
  width: 100vw;
`;
const StyledLink = styled.a`
  color: blue;
  text-decoration: none;
  &:visited {
    color: purple;
  }
`;
const StyledNav = styled(Link)`
  text-decoration: none;
`;
export default Links;
