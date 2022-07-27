import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/API";
import { useProtectdPage } from "../../hooks/useProtectdPage";
import { useGetRequestData } from "../../hooks/useGetRequestData";
import { goToTripDetailsPage, goToCreateTripPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import {MainDiv, TripDiv} from "./style"
import { goBack} from "../../Routes/Coordinator";
import { createTripPage } from "../../constants/Constants";



export function MainAdminHome () {

    const navigate = useNavigate()

    useProtectdPage()

    const trips = useGetRequestData([], `${BASE_URL}/trips`)

    const deleteTrip = (id) => {
        const token = localStorage.getItem("token");
        const headers = {
            headers: {
                auth: token
            }
        }
    
        axios.delete(`${BASE_URL}/trips/${id}`, headers)
        .then((res) => {
            alert("Viagem deletada com sucesso, atualize a página!")
        })
        .catch((err) => { console.log(err.response.data) })
    }
    const listTrips = trips.map((trip) => {
        return(
            
            <TripDiv key={trip.id}>
                <h1> {trip.name} </h1>
                <p> "{trip.description}" </p>
                <p> Destino: {trip.planet} </p>
                <p> Duração: {trip.durationInDays} dias </p>
                <p> Data: {trip.date} </p>
                <button onClick={() => goToTripDetailsPage(navigate, trip.id)}> Candidatos </button>
                <button onClick={() => deleteTrip(trip.id)}> Excluir </button>
            </TripDiv>
        )})

return(
    <MainDiv>

        {listTrips}
        
        <button className="voltar"
                onClick={()=>goBack(navigate)}>Voltar
        </button>

        <button className="criar"
                onClick={()=>goToCreateTripPage(navigate, createTripPage)}>criar viagem
        </button>

    </MainDiv>
)
}