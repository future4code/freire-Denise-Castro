import React from "react";
import HeaderPublic from "../../components/headerPublic/HeaderPublic";
import Footer from "../../components/footer/Footer";
import { ListTrips } from "../../components/listTrips/ListTrips.jsx";

 export function ListTripsPage () {
    return(
        <div>
        <HeaderPublic/>
        <ListTrips/>
        <Footer/>
        </div>
    )
 }