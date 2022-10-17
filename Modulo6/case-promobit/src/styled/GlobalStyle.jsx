import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const ContainerApp = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  max-width: 100vw;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  background: #ececec;
`