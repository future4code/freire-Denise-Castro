import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";
import { HomePage } from "../pages/HomePage/HomePage";
import {ListTripsPage} from "../pages/ListTripsPage/ListTripsPage"
import {ApplicationsFormPage} from "../pages/ApplicationsFormPage/ApplicationsFormPage"
import {LoginPage} from "../pages/LoginPage/LoginPage"

const Router01 = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="login-page/admin-page" element={<AdminHomePage/>}/>
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