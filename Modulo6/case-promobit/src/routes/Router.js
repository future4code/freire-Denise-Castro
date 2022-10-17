import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage";
import FilmesPage from "../pages/FilmesPage/FilmesPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="movies/:id" element={<FilmesPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router