import React from "react";
import {useNavigate} from "react-router-dom"
import { goToHomePage } from "../../routes/Coordinator";
import { HeaderContainer } from "./styled";
import logo from "../../Assets/logo.svg"

const Header = () => {
    const navigate=useNavigate()
    return (
        <HeaderContainer>
            <img
            src={logo}
            alt="Tmdb logo"
            onClick={()=> goToHomePage(navigate)}/>
            
        </HeaderContainer>
    )
}

export default Header