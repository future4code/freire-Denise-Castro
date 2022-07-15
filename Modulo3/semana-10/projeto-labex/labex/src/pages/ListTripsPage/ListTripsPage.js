import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToPage } from "../../Routes/Coordinator";
import { applicationPage } from "../../constants/Constants";



function ListTripsPage (){

    const navigate = useNavigate()

    return(
        <>
            <h1>Pag Lista de Viagens</h1>
                <button
                onClick={()=>goBack(navigate)}>Voltar
                </button>

                <button
                 onClick={()=>goToPage(navigate,{applicationPage})}>Inscrever-se
                </button>
        </>
    )
}

export default ListTripsPage