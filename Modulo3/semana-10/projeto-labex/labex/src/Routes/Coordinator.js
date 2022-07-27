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
    navigate("/login-page/admin-page")
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goBackAdminHomePage = (navigate) => {
    navigate(-1)
}

export const goToLogout = (navigate) => {
    window.localStorage.clear('token') 
    navigate("/login-page")
}

export const goToLoginPage = (navigate) => {
    navigate("/login-page")
}