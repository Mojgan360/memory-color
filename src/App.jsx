import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Themes";

import Home from "./Pages/Home";
import CardState from "./context/CardState";

function App() {
  return (
    <>
      <CardState>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </CardState>
    </>
  );
}

export default App;
