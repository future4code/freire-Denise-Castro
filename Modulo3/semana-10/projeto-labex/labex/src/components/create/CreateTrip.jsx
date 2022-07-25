import React from "react";


export function CreateTrip () {
    const navigate = useNavigate()

    useProtectdPage()

    const { form, onChange, clearFields } = useForm({
        name:"", planet:"", date:"", description:"", durationInDays: ""
    })
}