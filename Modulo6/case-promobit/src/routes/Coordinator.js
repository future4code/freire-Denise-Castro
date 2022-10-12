export const goToHome = (navigate) => {
    navigate("/")
}

export const goToFilmes = (navigate) => {
    navigate(`/movie`)
    window.scrollTo(0, 0)
}
