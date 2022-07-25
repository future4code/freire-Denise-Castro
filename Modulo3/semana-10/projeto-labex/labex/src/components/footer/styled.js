import styled from "styled-components";

export const FooterDiv = styled.div`
    height: 15vh;
    width: 100%;
    background-color: #000000;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        align-self: center;
        margin-left: 10px;
    }
    p {
        margin-left: 10px;
    }
    h4 {
        align-self: flex-end;
        margin: 0 0 10px 80px;
       
        
    }
    button {
        position: static;
        color: #fbea80;
        font-size: 20px;
        background-color: #ffffff01;
        border: none;

        cursor: pointer;
        :hover{
            color: white;
            font-size: 20px;
        }
    }
    
    `
