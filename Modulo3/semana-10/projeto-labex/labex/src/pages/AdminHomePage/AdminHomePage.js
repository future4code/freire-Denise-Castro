import React from "react";
import { useNavigate } from "react-router-dom";
import { createTripPage } from "../../constants/Constants";
import { goBack, goToPage} from "../../Routes/Coordinator";
import { tripeDetailsPage } from "../../constants/Constants";



export default function AdminHomePage () {
    
    const navigate = useNavigate()

    return (
        <>
        <h1>Admin Home Page</h1>
        <button
                onClick={()=>goBack(navigate)}>Voltar
        </button>

        <button
                onClick={()=>goToPage(navigate, createTripPage)}>criar viagem
        </button>

        <button
                onClick={()=>goToPage(navigate, tripeDetailsPage)}>viagem para a lua
        </button>

        </>
    )

}