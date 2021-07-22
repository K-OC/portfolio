import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import GlobalStyles from "./Components/GlobalStyles";

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
  height: 100vh;
  font-family: var(--header-font)
`;

export default App;
