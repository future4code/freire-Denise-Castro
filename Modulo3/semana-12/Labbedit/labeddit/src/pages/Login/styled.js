import styled from "styled-components"

export const Logo = styled.img`
  width: 84px;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-bottom: 70px;
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    color: #373737;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
  }
`
export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    width: 100%;
  }
  @media screen and (min-device-width : 501px) {
    width: 500px;
  }
`
export const Line = styled.hr`
  width: 100%;
  height: 1px;
  margin: 18px 0;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border: 0 none;
`


// input do formulário
export const InputField = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 16px;
  margin-bottom: 8px;
  border: 1px solid #D5D8DE;
  border-radius: 4px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`


// buttons
export const GradientButton1 = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 48px;
  
  font-size: 18px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border: none;
  border-radius: 27px;
`

export const CreateAccountButton = styled.button`
  width: 100%;
  height: 50px;
  
  font-size: 18px;
  color: #FE7E02;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  
  background-color: white;
  border: 1px solid #FE7E02;
  border-radius: 27px;
`

export const GradientButton2 = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 18px;
  font-size: 18px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border: none;
  border-radius: 12px;
`