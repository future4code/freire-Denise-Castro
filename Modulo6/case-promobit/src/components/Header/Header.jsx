import React from "react";
import {useNavigate} from "react-router-dom"
import { goToHome } from "../../routes/Coordinator";
import { HeaderContainer } from "./styled";

const Header = () => {
    const navigate=useNavigate()
    return (
        <HeaderContainer>
            <h2 onClick={()=> goToHome(navigate)}>
                T M D B
            </h2>
        </HeaderContainer>
    )
}

export default Header