import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import GlobalStyles from "./Components/GlobalStyles";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
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
            <Route path="/Projects" exact>
              <Projects />
            </Route>
          </Switch>
        </Wrapper>
        <Footer />

      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  background-image: linear-gradient(
    to bottom,
    #070707,
    #070707,
    #070707,
    #00796b
  );
  height: min-content;
  font-family: var(--header-font);
  margin: 0;
`;

export default App;
