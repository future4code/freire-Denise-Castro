import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/API";
import { useGetRequestData } from "../../hooks/useGetRequestData";
import { goToPage } from "../../Routes/Coordinator";
import { TripDiv } from "./styled";
import { Div02 } from "./styled";
import { applicationPage } from "../../constants/Constants";



export function ListTrips(){

    const navigate = useNavigate()

    const trips = useGetRequestData([], `${BASE_URL}/trips`)

    const lista = trips.map((trip) => {
        return(
            <TripDiv key={trip.name}>
                <h1> {trip.name} </h1>
                <h3> "{trip.description}" </h3>
                <p> Destino: {trip.planet} </p>
                <p> Duração: {trip.durationInDays} dias </p>
                <p> Data: {trip.date} </p>
            </TripDiv>
        )
    })

return (
    <Div02>
    {lista}
    <button onClick={() => goToPage(navigate, applicationPage)}> Candidatar-se </button>
    </Div02>
)
}