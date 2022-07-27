import styled from "styled-components";

export const ContainerDiv = styled.div `
    height: 75vh;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    background-color:#001f36 ;
    justify-content: center;
    align-items: center


`
export const FormContainer = styled.div`
    background-color: #ffffff20;;
    width: 100%;
    max-width: 600px;
    height: 250px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    border: 1px solid #ffffff;
    display: flex;
    flex-direction: column;

   input {
    width: 85%;
    height: 22px;
    border-radius: 5px;
    margin: 5px;
    justify-content: center;
    align-items: center;
    border: 2px solid #ffffff10;;



   }

   select {
    width: 85%;
    height: 22px;
    border-radius: 5px;
    margin: 5px;
    justify-content: center;
    align-items: center;
    border: 2px solid #ffffff10;;
   }

 button.aplicar{
    background-image: linear-gradient(45deg, #f37335, #fdc830);
    border: none;

   }

`