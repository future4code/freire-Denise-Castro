import React from "react";
import {useNavigate} from "react-router-dom"
<<<<<<< HEAD
import { goToHomePage } from "../../routes/Coordinator";
import { HeaderContainer } from "./styled";
import logo from "../../Assets/logo.svg"
=======
import { goToHome } from "../../routes/Coordinator";
import { HeaderContainer } from "./styled";
>>>>>>> 2f53440191951cc75810a53c9dfa7ebcfb0ccb05

const Header = () => {
    const navigate=useNavigate()
    return (
        <HeaderContainer>
<<<<<<< HEAD
            <img
            src={logo}
            alt="Tmdb logo"
            onClick={()=> goToHomePage(navigate)}/>
            
=======
            <h2 onClick={()=> goToHome(navigate)}>
                T M D B
            </h2>
>>>>>>> 2f53440191951cc75810a53c9dfa7ebcfb0ccb05
        </HeaderContainer>
    )
}

export default Header