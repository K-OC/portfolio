import React from "react";
import styled from "styled-components";

const DropList = () => {
  return (
    <>
      <Wrapper>
        <ul>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/favorites">Favorites</a>
          </li>
          <li>
            <a href="/logout">Log Out</a>
          </li>
        </ul>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;
export default DropList;
