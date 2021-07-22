import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
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
  width: 100vw;
  height: 100vh;
`;

export default App;
