import { createGlobalStyle } from "styled-components";

export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
:root {
    
    --header-font: "Mandali";

}

html, body {
    margin: 0;
    height: 100vh
}`;
