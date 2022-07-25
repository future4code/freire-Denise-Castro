import React from "react";
import { useNavigate } from "react-router-dom";
import { createTripPage } from "../../constants/Constants";
import { goBack, goToPage} from "../../Routes/Coordinator";
import { tripeDetailsPage } from "../../constants/Constants";
import HeaderPublic from "../../components/headerPublic/HeaderPublic";
import { MainAdminHome } from "../../components/adm/MainAdminHome";
import Footer from "../../components/footer/Footer";



export default function AdminHomePage () {
    
    const navigate = useNavigate()

    return (
        <>
        <HeaderPublic/>

        <MainAdminHome/>

        <Footer/>

        </>
    )

}