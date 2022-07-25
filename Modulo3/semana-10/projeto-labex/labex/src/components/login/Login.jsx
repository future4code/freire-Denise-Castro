import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/API";
import axios from "axios";
import { useForm } from "../../hooks/useForrm";
import { DivContainer, LoginDiv } from "./styled";

export default function Login () {
    const navigate = useNavigate()

    const { form, onChange } = useForm({email:"", password:""})

    const onSubmitLogin = (event) => {
        event.preventDefault()
         
        axios.post(`${BASE_URL}/login`, form)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            alert("Autenticações autorizadas!")
            navigate("admin-page", {replace:true})
        })
        .catch((err) => {
            console.log('não autorizado: ', err.response)
            alert("Autenticações não autorizadas.")
        })
    }

    return(
        <LoginDiv>
            <DivContainer>
            <form onSubmit={onSubmitLogin}>
                <input 
                    name={'email'}
                    placeholder="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input 
                    name={'password'}
                    placeholder="password"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <button> Entrar </button>
            </form>

            </DivContainer>
        </LoginDiv>
    )

}