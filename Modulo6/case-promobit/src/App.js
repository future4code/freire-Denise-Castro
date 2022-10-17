import React from "react"
import Header from "./components/Header/Header";
import Router from "./routes/Router";
import { ContainerApp } from "./styled/GlobalStyle";
import { GlobalStyle } from "./styled/GlobalStyle";


function App() {
  return (
   
    
      <ContainerApp>
        <GlobalStyle/>
        
        <Router/>
        
        
      
      </ContainerApp>
      

 
    
  );
}

export default App;
