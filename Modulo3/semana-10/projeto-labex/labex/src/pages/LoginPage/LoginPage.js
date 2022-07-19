import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/API";
import axios from "axios"
import { useForm } from "../../hooks/useForrm";
import HeaderPublic from "../../components/headerPublic/HeaderPublic";


export function LoginPage() {

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
        <div>
            <HeaderPublic />

            <h2> Login Page </h2>

            <br/>

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

                <button> Conectar </button>
            </form>
        </div>
    )
}