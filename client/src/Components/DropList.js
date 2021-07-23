import React from "react";
import styled from "styled-components";

const DropList = () => {
  return (
    <>
      <Wrapper>
        <List>
          <Item>
            <Link href="/profile">Profile</Link>
          </Item>
          <Item>
            <Link href="/favorites">Favorites</Link>
          </Item>
          <Item>
            <Link href="/logout">Log Out</Link>
          </Item>
        </List>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
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
