import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";
export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
:root {
    
    --header-font: "Mandali";
    font-size: ${px2vw(24)};

@media (min-width: 768px) {
  font-size: ${px2vw(18)};
}

@media (min-width: 1024px) {
  font-size: ${px2vw(16)};
}

}

html, body {
    margin: 0;
    height: 100vh
}`;
