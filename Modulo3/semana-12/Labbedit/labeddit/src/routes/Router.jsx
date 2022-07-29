import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import FeedPage from "../pages/Feed/FeedPage";
import LoginPage from "../pages/Login/LoginPage";
import PostPage from "../pages/Post/PostPage";
import SignUp from "../pages/SignUp/SignUp";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element = {<LoginPage/>}/>
                <Route path = "/signup" element = {<SignUp/>}/>
                <Route path = "/feed" element = {<FeedPage/>} />
                <Route path = "/feed/:id" element = {<PostPage/>} />
                <Route path = '*' element = {<ErrorPage/>} /> 
            </Routes>
        </BrowserRouter>
    )

}

export default Router;