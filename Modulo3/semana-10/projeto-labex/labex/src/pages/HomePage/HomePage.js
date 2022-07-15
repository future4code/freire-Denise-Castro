import React from "react";
import {useNavigate} from "react-router-dom"
import { goToPage } from "../../Routes/Coordinator";
import { listTrips, loginPage } from "../../constants/Constants";


export default function HomePage () {
    const navigate = useNavigate()

    return(
        <>
            <h1>ASTRODEV</h1>
            <button
                onClick={()=>goToPage(navigate,listTrips)}>Lista De Viagens
            </button>
            
            <button
                 onClick={()=> goToPage(navigate,loginPage)}>Login
            </button>
        </>
    )
}

