import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Routes/Coordinator";


export default function CreateTripPage () {
    const navigate = useNavigate ()

    return (
        <>
        <h1>Create Trip Page</h1>
        <button onClick={()=>goBack(navigate)}>Voltar</button>
        </>
    )

}