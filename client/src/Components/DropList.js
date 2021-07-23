import React from "react";
import styled from "styled-components";

const DropList = () => {
  return (
    <>
      <Wrapper>
        <List>
          <Item>
            <Link href="https://github.com/K-OC" taget="_blank">
              Github
            </Link>
          </Item>
          <Item>
            <Link href="https://www.linkedin.com/in/kieran-oc/">LinkedIn</Link>
          </Item>
          <Item>
            <Link href="/Projects">Projects</Link>
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
const Link = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: teal;
  }
`;
export default DropList;
