import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import GlobalStyles from "./Components/GlobalStyles";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <GlobalStyles />
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-image: linear-gradient(
    to bottom,
    #070707,
    #070707,
    #070707,
    #00796b
  );
  height: fit-content;
  font-family: var(--header-font);
  margin: 0;
`;

export default App;
