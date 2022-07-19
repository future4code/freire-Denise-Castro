import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToPage } from "../../Routes/Coordinator";
import { adminHomePage } from "../../constants/Constants";



export default function LoginPage () {
    const navigate = useNavigate()

    return(
        <>
            <h1>Pag de Login</h1>
                <button
                onClick={()=>goBack(navigate)}>Voltar
                </button>

                <button
                onClick={()=>goToPage(navigate, adminHomePage)}>Logar
                </button>

        </>
    )

}