import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToPage } from "../../Routes/Coordinator";
import { createTripPage } from "../../constants/Constants";

export default function ApplicationsFormPage () {
    const navigate = useNavigate()

    return (
        <>
        <h1>Applications Form Page</h1>
        <button onClick={()=>goBack(navigate)}> Voltar </button>

        <button onClick={()=>goToPage(navigate, createTripPage)}> inscrever-se </button>
        

        </>
    )

}