import React from "react";
//import axios from "axios";
import { MainDiv } from "./styled";
/*import { useProtectdPage } from "../../hooks/useProtectdPage";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/API";
import { useState } from "react";
import { useEffect } from "react";
import { goBackAdminHomePage } from "../../Routes/Coordinator";*/

export function Details () {
  
    /*useProtectdPage()
    const navigate = (useNavigate)
    const pathParams = (useParams)
    const [candidates, setCandidates] = useState([])
    const [canditadesApproved, setCandidatesApproved]= useState([])
    const getTripDetail = () => {
        const token = localStorage.getItem('token')
        axios.get(`${BASE_URL}/trip/${pathParams.id}`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            setCandidates(res.data.trip.candidates)
            setCandidatesApproved(res.data.trip.approved)
        })
        .catch((err) => {
            console.log('Erro: ', err.response)
        })
    }

    useEffect(() => {
        getTripDetail()
    }, [])

    const candidatos = [...candidates].map((candidato) => {
        return (
            <DivDetails key={candidato.id}>
                <p>Nome: {candidato.name}</p>
                <p>Profissão: {candidato.profession}</p>
                <p>Idade: {candidato.age}</p>
                <p>País: {candidato.country}</p>
                <p>Texto de candidatura: {candidato.applicationText}</p>
                <div>
                    <button onClick={() => putCandidateDesaproved(candidato.id)}>Descartar</button>
                    <button onClick={() => putCandidateAproved(candidato.id)}>Aprovar</button>
                </div>
            </DivDetails>
        )
    })

    const putCandidateDesaproved = (id) => {
        const body = {approve: false}
        const token = localStorage.getItem('token')

        axios.put(`${BASE_URL}/trips/${pathParams.id}/candidates/${id}/decide`,body, {headers: 
            {auth: token}
        })
        .then((res) => {
            alert('Descartado')
            getTripDetail()
        })
        .catch((err) => {
            console.log(err.response.data)
        })

    }

    const putCandidateAproved = (id) => {
        const body = {approve: true}
        const token = localStorage.getItem('token')

        axios.put(`${BASE_URL}/trips/${pathParams.id}/candidates/${id}/decide`, body, {headers: 
            {auth: token}
        })
        .then((res) => {
            alert('Aprovado')
            getTripDetail()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    const aprovados = [...canditadesApproved].map((aprovado) => {
        return (<li key={aprovado.id}> {aprovado.name} </li>)
    })
*/

    return(
        <MainDiv>
            <p> Detalhes </p>
          
      
        
        </MainDiv>
    )
}