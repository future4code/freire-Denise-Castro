import styled from "styled-components"

export const FilterContainer = styled.div `
  
  width: 100%;
  min-height: 300px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
  background-color: #2D0C5E;
  color: white;
`

export const Title = styled.h1 `
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 48px;
  
  padding: 40px 0;
  width: 70%;
  
  line-height: 56px;
  text-align: center;
  letter-spacing: -0.005em;
  color: white;
  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    width: 100%;
    padding: 40px 16px;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
  }
`

export const ButtonsContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 40px;
  max-width: 90%;
  gap: 12px;
`