import React, {useState} from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import GlobalStyles from "./Components/GlobalStyles";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Links from "./Components/Links"

function App() {
  // const [header, setHeader] = useState(!header)
  console.log(window.location.pathname)
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <GlobalStyles />
          {window.location.pathname !== "/links" ?  <Header/> : (null)}
        
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
