import styled from "styled-components";

export const MainHomeDiv = styled.div`
    height: 75vh;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${props => props.Img}) no-repeat top;
    background-size: 40% 70%;
    @media (max-width: 800px)  {
		background-size: 80% 60%;
    }