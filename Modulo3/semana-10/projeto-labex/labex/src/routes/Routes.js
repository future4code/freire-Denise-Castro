import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import AdminHomePage from "../pages/AdminHomePage";
import ApplicationsFormPage from "../pages/ApplicationsFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import ListTripsPage from "../pages/ListsTripPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage/index.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const Screens = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='adminPage' element={<AdminHomePage/>}/>
            <Route path='applicationPage' element={<ApplicationsFormPage/>}/>
            <Route path='createTrip' element={<CreateTripPage/>}/>
            <Route path='listTrips' element={<ListTripsPage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='tripDetails' element={<TripDetailsPage/>}/>
            </Routes>
        </BrowserRouter>

    )
}