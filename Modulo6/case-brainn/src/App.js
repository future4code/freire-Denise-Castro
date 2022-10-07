import React from "react";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState"
import { ContainerApp } from "./styled/GlobalStyle";
import { GlobalStyle } from "./styled/GlobalStyle";

function App() {
  return (
    <GlobalState>
      <ContainerApp>
      <GlobalStyle/>
      <Router/>
    </ContainerApp>
  </GlobalState>
  );
}

export default App;
