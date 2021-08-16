import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import GlobalStyles from "./Components/GlobalStyles";
import Projects from "./Components/Projects";
// import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Links from "./Components/Links";

function App() {
  const [header, setHeader] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <GlobalStyles />
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/links">
              <Links />
            </Route>
          </Switch>
        </Wrapper>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 100vw; */
  background-image: linear-gradient(
    to bottom,
    #070707,
    #070707,
    #070707,
    #00796b
  );
  /* height: fit-content; */
  font-family: var(--header-font);
  margin: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export default App;
