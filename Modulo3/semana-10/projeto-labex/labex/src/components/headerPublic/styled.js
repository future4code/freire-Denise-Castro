import styled from "styled-components";

export const HeaderDiv = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
    height: 11vh;
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-between;
    background-color: #204b5e;
    align-items: center;
    h1 {
        margin-left: 10px;
        font-family: 'Press Start 2P', cursive;    }
    button {
        font-family: 'Courier New', Courier, monospace;
        top: 0;
        margin: 0;
        margin-right: 10px;
        padding: 5px;
        color: #fbea80;
        background-color: #ffffff01;
        border: none;
        font-size: 20px;
        cursor: pointer;
        :hover{
            color: white;
        }
    }
`