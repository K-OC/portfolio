import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const DropList = () => {
  const props = useSpring({
    mass: 5.1,
    tension: 463,
    friction: 70,
    precision: 0.222,
    velocity: -26,
  });
  return (
    <>
      <Wrapper>
        <animated.div style={props}>
          <List>
            <Item>
              <StyledLink href="https://github.com/K-OC" taget="_blank">
                Github
              </StyledLink>
            </Item>
            <Item>
              <StyledLink href="https://www.linkedin.com/in/kieran-oc/">
                LinkedIn
              </StyledLink>
            </Item>
            <Item>
              <NavLink to="/projects">Projects</NavLink>
            </Item>
          </List>
        </animated.div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
  @media (max-width: 769px) {
    font-size: 1rem;
  }

`;

const List = styled.ul``;
const Item = styled.li`
  font-size: 1.8em;
  font-weight: bold;
  border: 1px solid white;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: teal;
  }
`;
const NavLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: pink;
  }
`;
export default DropList;
