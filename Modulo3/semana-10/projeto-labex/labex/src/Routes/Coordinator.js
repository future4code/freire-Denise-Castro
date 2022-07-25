export const goToHome = (navigate) =>{
    navigate("/")
}

export const goToPage = (navigate,page) =>{
    navigate(`/${page}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToAdminHomePage = (navigate) => {
    navigate("../admin/trips/list")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}
