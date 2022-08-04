import React from "react";
import {useNavigate} from "react-router-dom";

import { login } from "../constants/requests";

import useForm from "../hooks/useForm";
import { InputField, GradientButton1} from "../pages/Login/styled";

const LoginForm = () => {

    const navigate = useNavigate

    const {form  , onChange} = useForm ({email: " ", password:" "})

    const onSubmitLogin = (event) => {
        event.preventDefault()
        login(form, navigate)
    }

    return(
        <form onSubmit={onSubmitLogin}>
            <InputField
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
            placeholder="Digite seu e-mail"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="exemplo@exemplo.com"
            required
        />
        <InputField
            name="password"
            value={form.password}
             onChange={onChange}
            type="password"
            placeholder="Digite sua senha"
            title="123456"
            required
        />
         <GradientButton1 type={"submit"}>Continuar</GradientButton1>
        </form>

    )
}

export default LoginForm
