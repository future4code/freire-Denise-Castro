import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CreateTripPage} from "../pages/CreateTripPage/CreateTripPage"
import { HomePage } from "../pages/HomePage/HomePage";
import {ListTripsPage} from "../pages/ListTripsPage/ListTripsPage"
import {ApplicationsFormPage} from "../pages/ApplicationsFormPage/ApplicationsFormPage"
import {LoginPage} from "../pages/LoginPage/LoginPage"
import {AdminHomePage} from "../pages/AdminHomePage/AdminHomePage"
import {TripDetailsPage} from "../pages/TripDetailsPage/TripDetailsPage"

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
          <Route path="/admin/trips/:id" element = {<TripDetailsPage/>}/>
      
        </Routes>
       </BrowserRouter>
    )
}

export default Router01