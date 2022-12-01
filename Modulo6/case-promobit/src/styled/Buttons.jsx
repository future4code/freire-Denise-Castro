import styled from "styled-components"

export const FilterButton = styled.button `
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 40px;
  border: none;
  border-radius: 4px;


  background-color: ${(p) => p.select ? "#D18000" : "#fffff"};
  color: ${(p) => p.select ? "white" : " #323232"};

  
  line-height: 24px;
  :hover {
    cursor: pointer;
  }
  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    height: 32px;
    font-size: 14px;
    line-height: 20px;
  }
`