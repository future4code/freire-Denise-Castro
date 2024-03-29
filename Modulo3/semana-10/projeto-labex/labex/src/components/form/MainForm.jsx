import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../Routes/Coordinator";
import { listTrips } from "../../constants/Constants";
import { BASE_URL } from "../../constants/API";
import { useForm } from "../../hooks/useForrm";
import { useGetRequestData } from "../../hooks/useGetRequestData";
import { countrys } from "../../constants/countrys";
import { useState } from "react";
import { ContainerDiv, FormContainer } from "./Styled";


export function MainForm () {
  const navigate = useNavigate()
    const [tripId, setTripId] = useState("")
    const { form, onChange, clearFields } = useForm({
        name: "", age: "", applicationText: "", profession: "", country: ""
    })
    const trips = useGetRequestData([], `${BASE_URL}/trips`)

    const tripsOptions = trips && trips.map((trip) => {
        return (<option key={trip.id} value={trip.id}> {trip.name} - {trip.planet} </option>)
    })

    const onChangeTripId = (event) => {
        setTripId(event.target.value)
    }

    const onSubmitApplication = (event) => {
        event.preventDefault()
        
        axios.post(`${BASE_URL}/trips/${tripId}/apply`, form)
        .then(() => {
            alert("Aplicação feita com sucesso!") 
            clearFields() 
        })
        .catch((err) => { console.log(err.response.data) })
    };  

    return (
        <ContainerDiv>
        <FormContainer>
             <form onSubmit={onSubmitApplication}>
                <select defaultValue="" 
                    placeholder="Nome da viagem"
                    onChange={onChangeTripId}
                    required
                >
                    <option value="" disabled> Escolha uma viagem </option>
                    {tripsOptions}
                </select>
                <input placeholder="Nome"
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    type={"text"}
                    pattern={"^.{3,}$"}
                    title="O nome deve ter no mínimo 3 caracteres."
                    required
                />
                <input placeholder="Idade"
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    type={"number"}
                    min={18}
                    required
                />
                <input placeholder="Texto de candidatura"
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    type={"text"}
                    pattern={"^.{30,}"}
                    title={"O texto deve ter no mínimo 30 caracteres."}
                    required
                />
                <input placeholder="Profissão"
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    pattern={"^.{10,}"}
                    title={"O texto deve ter no mínimo 10 caracteres."}
                    required
                />
                <select placeholder="Nome do país"
                    name={"country"} 
                    value={form.country}
                    onChange={onChange}
                    type={"text"}
                    required
                >
                    <option value="" disabled> Escolha um país </option>
                    {countrys.map((country) => {
                        return(<option value={country} key={country}> {country} </option>)
                    })}
                </select>
                <button className="aplicar"> Aplicar </button>
            </form>

            <button onClick={() => goBack (navigate, listTrips)}> Voltar </button>
        </FormContainer>
        </ContainerDiv>
    )
}



