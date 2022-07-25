import styled from "styled-components";

export const MainHomeDiv = styled.div`
    height: 75vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 100% 100%;
    font-family: 'Courier New', Courier, monospace;
    background-color: #001f36;

    button {
        font-family: 'Courier New', Courier, monospace;
        margin: 8em 1em 1em 1em;
        padding: 5px;
        border: none;
        border-radius: 100px;
        background-color: #baab6a;
        color: white;
        height: 15%;
        width: 10%;
        font-size: 1em;
        cursor: pointer;
        :hover{
            background-color: #fbea80
        }
       
    }
`