import React from "react";
import HeaderPublic from "../../components/headerPublic/HeaderPublic";
import Footer from "../../components/footer/Footer";
import { MainForm } from "../../components/form/MainForm";


export function ApplicationsFormPage(){

    return(
        <div>
            <HeaderPublic />
            <MainForm/>
            <Footer />
        </div>
    )
}