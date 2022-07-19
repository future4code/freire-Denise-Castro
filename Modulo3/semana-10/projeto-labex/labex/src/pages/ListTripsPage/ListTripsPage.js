import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {BASE_URL } from "../../constants/API"
import { useGetRequestData } from "../../hooks/useGetRequestData";
import HeaderPublic from "../../components/headerPublic/HeaderPublic";
import Footer from "../../components/footer/Footer";
import goToApplicationFormPage, { goToPage } from "../../Routes/Coordinator"
import { applicationPage } from "../../constants/Constants";



const TripDiv = styled.div`
    margin: 5px;
    border: 1px solid black;
`

export function ListTripsPage(){

    const navigate = useNavigate()

    const trips = useGetRequestData([], `${BASE_URL}/trips`)

    const listTrips = trips.map((trip) => {
        return(
            <TripDiv key={trip.name}>
                <h1> {trip.name} </h1>
                <p> "{trip.description}" </p>
                <p> Destino: {trip.planet} </p>
                <p> Duração: {trip.durationInDays} dias </p>
                <p> Data: {trip.date} </p>
            </TripDiv>
        )
    })

    return(
        <div>
            <HeaderPublic />

            <h2> ListTripsPage </h2>

            {listTrips}
            
            <button onClick={() => goToPage(navigate, applicationPage)}> Candidatar-se </button>

            <Footer />
        </div>
    )
}