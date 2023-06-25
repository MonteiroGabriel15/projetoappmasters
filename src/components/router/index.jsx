import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home/home";


const RouterComponent = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent;