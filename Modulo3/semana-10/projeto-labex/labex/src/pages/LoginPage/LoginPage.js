import React from "react";
import HeaderPublic from "../../components/headerPublic/HeaderPublic";
import Login from "../../components/login/Login.jsx";
import Footer from "../../components/footer/Footer";


export function LoginPage() {

    return(
        <div>
            <HeaderPublic />
            <Login/>
            <Footer/>

        </div>
    )
}