import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const DropList = () => {
  return (
    <>
      <Wrapper>
        <List>
          <Item>
            <StyledLink href="https://github.com/K-OC" taget="_blank">
              Github
            </StyledLink>
          </Item>
          <Item>
            <StyledLink href="https://www.linkedin.com/in/kieran-oc/">LinkedIn</StyledLink>
          </Item>
          <Item>
            <NavLink to="/projects">Projects</NavLink>
          </Item>
        </List>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul``;
const Item = styled.li`
  font-size: 1.5em;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: teal;
  }
`;
const NavLink = styled(Link)`

`
export default DropList;
