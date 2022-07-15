import React from "react";
import HomePage from "../pages/HomePage/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import ApplicationsFormPage from "../pages/ApplicationsFormPage/ApplicationsFormPage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";

const Router01 = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="admin-page" element={<AdminHomePage/>}/>
          <Route path="applications-page" element={<ApplicationsFormPage/>}/>
          <Route path="create-page" element={<CreateTripPage/>}/>
          <Route path="list-page" element={<ListTripsPage/>}/>
          <Route path="login-page" element = {<LoginPage/>}/>
          <Route path="details-page" element = {<TripDetailsPage/>}/>
      
        </Routes>
       </BrowserRouter>
    )
}

export default Router01