import React from "react";
import { LogoContainer, Logo, BodyContainer, ContentContainer, Line, CreateAccountButton } from "./styled";
import LogoLabddit from "../../assets/logo.png"
import LoginForm from "../../components/LoginForm";
import {goToSignUpPage} from "../../routes/Coordinator"
import { useNavigate } from "react-router-dom";
import {useUnprotectedPage} from "../../hooks/useUnprotectdPage"
const LoginPage = () => {

useUnprotectedPage()
const navigate = useNavigate()

    return (
        <BodyContainer>
            <ContentContainer>
            <LogoContainer>
                <Logo src={LogoLabddit} alt="logo-labeddit"></Logo>
                <h1>Labeddit</h1>
                <p>O projeto de rede social da Labenu</p>
            </LogoContainer>

            <LoginForm/>

            <Line/>

            <CreateAccountButton onClick={()=> goToSignUpPage (navigate)}>Crie uma conta!

            </CreateAccountButton>
            </ContentContainer>
        </BodyContainer>
        
    )
}

export default LoginPage