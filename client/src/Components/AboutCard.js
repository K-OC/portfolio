import React from "react";
import styled from "styled-components";

const AboutCard = () => {
  return (
    <>
      <Wrapper>
        <h2>About me</h2>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 40vw;
  padding: 1rem;
  height: 20vw;
  color: #e6e6e6;
  font-family: var(--header-font);
  @media (min-width: 768px) {
    border: 1px #e6e6e6 solid;
  }
`;

export default AboutCard;
